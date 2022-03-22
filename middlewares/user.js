const userService = require('../services/user');

const create = async (req, res, next) => {
  try {
    const token = await userService.create(req.body);
    res.status(201).json({ token }); 
  } catch (e) {
    next(e);
  }
};

const all = async (_req, res, next) => {
  try {
    const users = await userService.get.all();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

module.exports = { create, get: { all } };