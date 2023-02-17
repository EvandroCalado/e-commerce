const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require('../controller/brandController');

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createCategory);
router.put('/update/:id', authMiddleware, isAdmin, updateCategory);
router.get('/category/:id', getCategory);
router.get('/', getAllCategory);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCategory);

module.exports = router;
