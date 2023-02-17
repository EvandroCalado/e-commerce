const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
  createCoupon,
  getAllCoupons,
  updateCoupon,
  deleteCoupon,
} = require('../controller/couponController');

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createCoupon);
router.put('/update/:id', authMiddleware, isAdmin, updateCoupon);
router.get('/', authMiddleware, isAdmin, getAllCoupons);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
