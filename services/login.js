const { User } = require('../models');
const createToken = require('../utils/createToken');
const validate = require('./validate');

module.exports = async ({ email, password }) => {
  validate.loginPassword(password);
  validate.loginEmail(email);
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    const error = { status: 400, message: 'Invalid fields' };
    throw error;
  }
  const token = createToken({ email, password });
  return token;
};