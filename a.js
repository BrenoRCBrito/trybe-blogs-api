const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, 
  { expiresIn: '7d', algorithm: 'HS256' });