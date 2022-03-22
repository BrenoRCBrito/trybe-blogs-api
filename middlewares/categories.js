const categoriesService = require('../services/categories');

const create = async (req, res, next) => {
  try {
    const category = await categoriesService.create(req.body);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
};

module.exports = { create };