const express = require('express');
const userController = require('./controllers/user');
const loginController = require('./controllers/login');
const categoriesController = require('./controllers/categories');
const blogPostsController = require('./controllers/blogPosts');
require('dotenv').config();
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userController);

app.use('/login', loginController);

app.use('/categories', categoriesController);

app.use('/post', blogPostsController);

app.use('*', notFound);

app.use(error);

app.listen(PORT, () => console.log('ouvindo porta %d!', PORT));
