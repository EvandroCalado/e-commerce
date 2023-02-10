const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
  if (req?.headers?.authorization?.startsWith('Bearer')) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user
        next()
      }
    } catch (error) {
      throw new Error('Not authorized token expired. Please login again');
    }
  } else {
    throw new Error('There is no token attached to header');
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  console.log(req.user.role)
  if (req.user.role !== "admin") {
    throw new Error('You are not admin')
  } else {
    next()
  }
})

module.exports = { authMiddleware, isAdmin };
