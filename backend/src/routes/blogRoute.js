const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { blogImgResize, uploadPhoto } = require('../middlewares/uploadImages');
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  deslikeBlog,
  uploadImages,
} = require('../controller/blogController');

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put(
  '/upload-img/:id',
  authMiddleware,
  isAdmin,
  uploadPhoto.array('images', 2),
  blogImgResize,
  uploadImages
);
router.put('/update/:id', authMiddleware, isAdmin, updateBlog);
router.put('/likes', authMiddleware, isAdmin, likeBlog);
router.put('/deslikes', authMiddleware, isAdmin, deslikeBlog);
router.get('/blog/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog);

module.exports = router;
