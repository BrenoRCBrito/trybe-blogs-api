const router = require('express').Router();
const loginMiddleware = require('../middlewares/login');

router.post('', loginMiddleware);

module.exports = router;