const jwt = require('jsonwebtoken');
const { User } = require('../models');
const validate = require('./validate');
require('dotenv').config();

const create = async ({ displayName, email, password, image }) => {
  validate.displayName(displayName);
  validate.email(email);
  validate.password(password);
  const user = await User.findOne({ where: { email } });
  const error = { status: 409, message: 'User already registered' };
  if (user) throw error;
  const newUser = await User.create({ displayName, email, password, image });
  const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, 
    { expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

module.exports = { create };