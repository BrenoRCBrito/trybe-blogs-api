const { DataTypes } = require('sequelize');

const postCategoriesAtributes = {
  postId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  categoryId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'Categories',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostsCategory',
    postCategoriesAtributes,
    { tableName: 'PostsCategories', timestamps: false },
  );
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'blogPosts', through: PostsCategory, foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.Category, {
      as: 'categories', through: PostsCategory, foreignKey: 'categoryId', otherKey: 'postId',
    });
  };
  return PostsCategory;
};
