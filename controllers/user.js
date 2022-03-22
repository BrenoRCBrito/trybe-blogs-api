const router = require('express').Router();
const userMiddlewares = require('../middlewares/user');
const authMiddleware = require('../middlewares/auth');

router.post('', userMiddlewares.create);

router.get('', authMiddleware, userMiddlewares.get.all);

module.exports = router;