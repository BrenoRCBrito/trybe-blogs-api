const loginService = require('../services/login');

module.exports = async (req, res, next) => {
  try {
    const token = await loginService(req.body);
    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};