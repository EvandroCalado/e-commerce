const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  deslikeBlog,
} = require('../controller/blogController');

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update/:id', authMiddleware, isAdmin, updateBlog);
router.get('/blog/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog);
router.put('/likes', authMiddleware, isAdmin, likeBlog);
router.put('/deslikes', authMiddleware, isAdmin, deslikeBlog);

module.exports = router;
