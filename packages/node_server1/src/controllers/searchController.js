const catchError = require('../utlis/catchError')
const { User } = require('../models/schema')
const predefinedSkills = require('../utlis/constants');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { config } = require('../configs/config')


const search = catchError(async (req, res) => {
    const { role, skills } = req.query;
    const users = await User.find({
        role,
        skills: { $in: skills.split(',') },
    });
    res.status(200).send(users);
})

module.exports = {  search }