const { registerUser, loginUser, sendOtp, verifyOtp } = require('../services/authService');

exports.register = async (req, res) => {
  try {
    await registerUser(req.body);
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.json({ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.sendOtp = async (req, res) => {
  try {
    const otp = await sendOtp(req.body.email);
    res.json({ otp });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    await verifyOtp(req.body.email, req.body.otp, req.body.inputOtp);
    res.send('OTP verified');
  } catch (err) {
    res.status(400).send(err.message);
  }
};
