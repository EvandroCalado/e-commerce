const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require('../controller/categoryController');

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createCategory);
router.put('/update/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/category/:id', getCategory);
router.get('/', getAllCategory);

module.exports = router;
