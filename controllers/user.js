const router = require('express').Router();
const userMiddlewares = require('../middlewares/user');
const authMiddleware = require('../middlewares/auth');

router.post('', userMiddlewares.create);

router.get('', authMiddleware, userMiddlewares.get.all);

router.get('/:id', authMiddleware, userMiddlewares.get.byId);

router.delete('/me', authMiddleware, userMiddlewares.destroy);

module.exports = router;