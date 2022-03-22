const { BlogPost, Category, User } = require('../models');
const validate = require('./validate');

const create = async ({ content, title, categoryIds }, userEmail) => {
  validate.content(content);
  validate.title(title);
  validate.categoryId(categoryIds);
  const categories = await Category.findAll();
  categoryIds.forEach((postCatId) => {
    const catExist = categories.some((cat) => postCatId === cat.id);
    if (!catExist) {
      const noCatError = { status: 400, message: '"categoryIds" not found' };
      throw noCatError;
    }
  });
  const [user] = await User.findAll({ where: { email: userEmail } });
  const { id } = user;
  const post = await BlogPost.create({ content, title, userId: id });
  return post;
};

module.exports = { create };