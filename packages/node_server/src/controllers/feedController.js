const catchError = require('../utlis/catchError')
const { Feed} = require('../models/schema')
const predefinedSkills = require('../utlis/constants');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const { config } = require('../configs/config')
const Post = require('../models/schema');


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

  const likePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.user._id; // Assuming user ID is stored in req.user
  
      let post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      if (post.likes.includes(userId)) {
        return res.status(400).json({ message: 'You have already liked this post' });
      }
  
      post.likes.push(userId);
      await post.save();
  
      res.status(200).json({ message: 'Post liked successfully', post });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };


  module.exports = { getPost , addPost , likePost}
  
  