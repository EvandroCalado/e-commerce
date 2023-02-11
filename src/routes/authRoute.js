const express = require('express');
const {
  createUser,
  loginUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
} = require('../controller/UserController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.put('/update/:id', authMiddleware, updateUser);
router.get('/refresh', handleRefreshToken);
router.get('/users', getAllUsers);
router.get('/user/:id', authMiddleware, isAdmin, getUser);
router.delete('/delete/:id', deleteUser);
router.put('/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;
