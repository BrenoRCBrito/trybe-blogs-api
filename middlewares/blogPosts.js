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

module.exports = { create };