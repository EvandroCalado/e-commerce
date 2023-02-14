const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler(async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Hey 👻" <evandro.calado.da.silva@gmail.com>',
    to: data.to,
    subject: data.subject,
    text: data.text,
    html: data.html,
  });
});

module.exports = sendEmail;
