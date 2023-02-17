const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
  uploadPhoto,
  productImgResize,
} = require('../middlewares/uploadImages');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getALlProducts,
  addToWishList,
  rating,
  uploadImages,
} = require('../controller/productController');

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProduct);
router.put(
  '/upload-img/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 10),
  productImgResize,
  uploadImages
);
router.put('/update/:id', authMiddleware, isAdmin, updateProduct);
router.put('/wishlist', authMiddleware, addToWishList);
router.put('/rating', authMiddleware, rating);
router.get('/product/:id', getProduct);
router.get('/', getALlProducts);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);

module.exports = router;
