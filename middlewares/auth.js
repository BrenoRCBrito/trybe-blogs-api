const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    const noTokenError = { status: 401, message: 'Token not found' };
    return next(noTokenError);
  }
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    return next();
  } catch (error) {
    const expiredTokenError = { status: 401, message: 'Expired or invalid token' };
    next(expiredTokenError);
  }
};