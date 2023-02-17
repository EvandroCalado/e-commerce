const express = require('express');
const {
  createUser,
  loginUser,
  updateUser,
  getAllUsers,
  getUser,
  saveAddress,
  deleteUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} = require('../controller/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);
router.post('/cart/apply-coupon', authMiddleware, applyCoupon);
router.post('/cart/create-order', authMiddleware, createOrder);
router.put('/password', authMiddleware, updatePassword);
router.put('/reset-password/:token', resetPassword);
router.put('/update/:id', authMiddleware, updateUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);
router.put('/update-order/:id', authMiddleware, isAdmin, updateOrderStatus);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/', getAllUsers);
router.get('/user/:id', authMiddleware, isAdmin, getUser);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/orders', authMiddleware, getOrders);
router.get('/user-cart', authMiddleware, getUserCart);
router.delete('/delete/:id', deleteUser);
router.delete('/empty-cart', authMiddleware, emptyCart)

module.exports = router;
