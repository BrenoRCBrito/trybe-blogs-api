const categoriesService = require('../services/categories');

const create = async (req, res, next) => {
  try {
    const category = await categoriesService.create(req.body);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
};

const all = async (_req, res, next) => {
  try {
    const categories = await categoriesService.get.all();
    res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = { create, get: { all } };