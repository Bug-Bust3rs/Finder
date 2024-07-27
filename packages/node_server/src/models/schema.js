const mongoose = require('mongoose');
const predefinedSkills = require('../utlis/constants');
  
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'mentor'],
      required: true,
    },
    skills: [{
      type: String,
      enum: predefinedSkills,
    }],
  });
  

  const feedSchema = new mongoose.Schema({
    content: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  });

  const postSchema = new mongoose.Schema({
    // other fields...
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  });
  
  
  const Feed = mongoose.model('Feed', feedSchema);
  const User = mongoose.model('User', userSchema);
  const Post = mongoose.model('Post', postSchema);

  
  module.exports = {User , Feed , Post};