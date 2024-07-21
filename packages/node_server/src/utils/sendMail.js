const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASS } = require('../configs/config');

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: EMAIL_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
