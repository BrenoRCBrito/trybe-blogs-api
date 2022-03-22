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

const all = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const edit = async (id, { title, content, categoryIds }, userEmail) => {
  validate.content(content);
  validate.title(title);
  if (categoryIds) {
    const categoryError = { status: 400, message: 'Categories cannot be edited' };
    throw categoryError;
  }
  const [user] = await User.findAll({ where: { email: userEmail } });
  const post = await BlogPost.findByPk(id);
  if (user.id !== post.userId) {
    const unauthorizedUserError = { status: 401, message: 'Unauthorized user' };
    throw unauthorizedUserError;
  }
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPost.findByPk(id, { include: [
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});
  return updatedPost;
};

module.exports = { create, get: { all }, edit };