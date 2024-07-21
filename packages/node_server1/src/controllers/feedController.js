const catchError = require('../utlis/catchError')
const { Feed} = require('../models/schema')
const predefinedSkills = require('../utlis/constants');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { config } = require('../configs/config')


const addPost = catchError(async (req, res) => {
    const { content } = req.body;
    const feed = new Feed({ content, user: req.params.id });
    await feed.save();
    res.status(201).send(feed);
  });
  

const getPost = catchError(async (req, res) => {
    const feeds = await Feed.find().populate('user');
    res.status(200).send(feeds);
  });


  module.exports = { getPost , addPost}
  
  