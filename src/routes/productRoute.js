const express = require('express');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getALlProducts,
} = require('../controller/productController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProduct);
router.put('/update/:id', authMiddleware, isAdmin, updateProduct);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);
router.get('/product/:id', getProduct);
router.get('/', getALlProducts);

module.exports = router;
