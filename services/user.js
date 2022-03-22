const { User } = require('../models');
const validate = require('./validate');
const createToken = require('../utils/createToken');

const create = async ({ displayName, email, password, image }) => {
  validate.displayName(displayName);
  validate.email(email);
  validate.password(password);
  const user = await User.findOne({ where: { email } });
  const error = { status: 409, message: 'User already registered' };
  if (user) throw error;
  const newUser = await User.create({ displayName, email, password, image });
  const token = createToken(newUser);
  return token;
};

const all = async () => User.findAll({ attributes: { exclude: ['password'] } });

const byId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    const noUserError = { status: 404, message: 'User does not exist' };
    throw noUserError; 
  } 
  return user;
};

const destroy = async (userEmail) => {
  const [user] = await User.findAll({ where: { email: userEmail } });
  const { id } = user;
  await User.destroy({ where: { id } });
};

module.exports = { create, get: { all, byId }, destroy };