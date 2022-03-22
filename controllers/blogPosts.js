const router = require('express').Router();
const blogPostsMiddleware = require('../middlewares/blogPosts');
const authMiddleware = require('../middlewares/auth');

router.post('', authMiddleware, blogPostsMiddleware.create);

router.get('', authMiddleware, blogPostsMiddleware.get.all);

router.get('/:id', authMiddleware, blogPostsMiddleware.get.byId);

router.put('/:id', authMiddleware, blogPostsMiddleware.edit);

router.delete('/:id', authMiddleware, blogPostsMiddleware.destroy);

module.exports = router;