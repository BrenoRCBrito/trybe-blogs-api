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

const byId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.get.byId(Number(id));
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const destroy = async (req, res, next) => {
  try {
    await userService.destroy(req.user.email);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
};

module.exports = { create, get: { all, byId }, destroy };