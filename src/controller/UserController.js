const User = require('../models/UserModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email });

  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error('User already exists');
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error('Invalid credentials');
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const id = req.user;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const gettingUsers = await User.find();
    res.json(gettingUsers);
  } catch (error) {
    throw new Error(error);
  }
});

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const gettingUser = await User.findById(id);
    res.json(gettingUser);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler( async (req, res) => {
  const {id} = req.params;
  try {
    const block = await User.findByIdAndUpdate(id, {
      isBlocked: true
    },
    {
      new: true
    })
  } catch (error) {
    throw new Error(error);
  }
  res.json({message: 'User blocked'})
})

const unblockUser = asyncHandler( async (req, res) => {
  const {id} = req.params;
  try {
    const unblock = await User.findByIdAndUpdate(id, {
      isBlocked: false
    },
    {
      new: true
    })
  } catch (error) {
    throw new Error(error);
  }
  res.json({message: 'User unblocked'})
})

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
  blockUser,
  unblockUser,
};
