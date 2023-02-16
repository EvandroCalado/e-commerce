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
router.get('/', authMiddleware, isAdmin, getAllCoupons);
router.put('/update/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
