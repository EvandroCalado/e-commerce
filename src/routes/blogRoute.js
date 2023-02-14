const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();
const { createBlog, updateBlog, getBlog } = require('../controller/blogController');

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update/:id', authMiddleware, isAdmin, updateBlog)
router.get('/blog/:id', getBlog)

module.exports = router;
