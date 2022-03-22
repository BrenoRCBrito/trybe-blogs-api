const router = require('express').Router();
const blogPostsMiddleware = require('../middlewares/blogPosts');
const authMiddleware = require('../middlewares/auth');

router.post('', authMiddleware, blogPostsMiddleware.create);

module.exports = router;