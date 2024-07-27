const catchError = require('../utlis/catchError')
const { User } = require('../models/schema')
const predefinedSkills = require('../utlis/constants');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { config } = require('../configs/config')




const register = catchError(async (req, res) => {
    const { name, email, password, role, skills } = req.body;
    const invalidSkills = skills.filter(skill => !predefinedSkills.includes(skill));
    if (invalidSkills.length > 0) {
        return res.status(400).send(`Invalid skills: ${invalidSkills.join(', ')}`);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role, skills });
    await user.save();
    const token = jwt.sign({ _id: user._id, role: user.role }, config.JWT_SECRET);
    const expireTime = parseInt(config.JWT_COOKIE_EXPIRES_IN)

    const cookieOptions = {
        expires: new Date(Date.now() + expireTime * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
        sameSite: 'strict',
    }

    res.cookie('jwt', token, cookieOptions)
    user.password = undefined
    user.cpassword = undefined
    res.setHeader('Authorization', `Bearer ${token}`)

    res.status(200).json({ success: true, data: user, jwt_token: token })
});


//   TypeError: skills.filter is not a function


const login = catchError(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('Invalid email or password.');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid email or password.');
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, config.JWT_SECRET);
    const expireTime = parseInt(config.JWT_COOKIE_EXPIRES_IN)

    const cookieOptions = {
        expires: new Date(Date.now() + expireTime * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
        sameSite: 'strict',
    }

    res.cookie('jwt', token, cookieOptions)
    user.password = undefined
    user.cpassword = undefined
    res.setHeader('Authorization', `Bearer ${token}`)

    res.status(200).json({ success: true, data: user, jwt_token: token })
});


module.exports = { login, register }