const blogPostsService = require('../services/BlogPosts');

const create = async (req, res, next) => {
  try {
    const post = await blogPostsService.create(req.body, req.user.email);
    const { id, userId, content, title } = post;
    res.status(201).json({ id, userId, content, title });
  } catch (e) {
    next(e);
  }
};

const all = async (_req, res, next) => {
  try {
    const posts = await blogPostsService.get.all();
    res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

const byId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await blogPostsService.get.byId(id);
    res.status(200).json(post);
  } catch (e) {
    next(e);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedUser = await blogPostsService.edit(id, req.body, req.user.email);
    const { title, content, userId, categories } = updatedUser;
    return res.status(200).json({ title, content, userId, categories });
  } catch (e) {
    next(e);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await blogPostsService.destroy(id, req.user.email);
    res.status(204).send();
  } catch (e) {
    next(e);
  }
};

const search = async (req, res, next) => {
  const { q: searchTerm } = req.query;
  try {
    const posts = await blogPostsService.search(searchTerm);
    return res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

module.exports = { create, get: { all, byId }, edit, destroy, search };