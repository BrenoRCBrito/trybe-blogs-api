const { Category } = require('../models');

const create = async ({ name }) => {
  if (!name) {
    const noNameError = { status: 400, message: '"name" is required' };
    throw noNameError;
  }
  const category = await Category.create({ name });
  return category;
};

const all = async () => Category.findAll();

module.exports = { create, get: { all } };