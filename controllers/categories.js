const router = require('express').Router();
const categoriesMiddlewares = require('../middlewares/categories');
const authMiddleware = require('../middlewares/auth');

router.post('', authMiddleware, categoriesMiddlewares.create);

router.get('', authMiddleware, categoriesMiddlewares.get.all);

module.exports = router;