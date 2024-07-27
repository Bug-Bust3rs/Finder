const catchError = require('../utlis/catchError')
const { User } = require('../models/schema')
const predefinedSkills = require('../utlis/constants');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { config } = require('../configs/config')


const addSKill = catchError(async (req, res) => {
    const { skills } = req.body;
    const invalidSkills = skills.filter(skill => !predefinedSkills.includes(skill));
    if (invalidSkills.length > 0) {
        return res.status(400).send(`Invalid skills: ${invalidSkills.join(', ')}`);
    }
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).send('User not found.');
    }
    user.skills.push(...skills.filter(skill => !user.skills.includes(skill)));
    await user.save();
    res.status(200).send(user);
});


module.exports = {  addSKill }