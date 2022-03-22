const userService = require('../services/user');

const create = async (req, res, next) => {
  try {
    const token = await userService.create(req.body);
    res.status(201).json({ token }); 
  } catch (e) {
    next(e);
  }
};

module.exports = { create };