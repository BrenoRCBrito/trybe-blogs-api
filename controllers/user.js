const router = require('express').Router();
const userMiddlewares = require('../middlewares/user');

router.post('', userMiddlewares.create);

module.exports = router;