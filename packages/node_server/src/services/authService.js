const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const sendMail = require('../utils/sendMail');
const { JWT_SECRET } = require('../configs/config');

const registerUser = async (userData) => {
  const { username, email, password } = userData;

  const user = new User({
    username,
    email,
    password,
  });

  await user.save();
};

const loginUser = async (loginData) => {
  const { username, password } = loginData;

  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid username or password.');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid username or password.');

  const token = jwt.sign({ _id: user._id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

const sendOtp = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await sendMail(email, 'Your OTP Code', `Your OTP code is ${otp}`);
  return otp;
};

const verifyOtp = async (email, otp, inputOtp) => {
  if (otp !== inputOtp) throw new Error('Invalid OTP.');
};

module.exports = {
  registerUser,
  loginUser,
  sendOtp,
  verifyOtp,
};
