const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    inique: true,
    uppercase: true,
  },
  expiry: {
    type: Date,
    require: true,
  },
  discount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model('Coupon', CouponSchema);
