const { DataTypes } = require('sequelize');

const blogPostsAtributes = {
  id: {
    allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
  title: {
    allowNull: false, type: DataTypes.STRING },
  content: {
    allowNull: false, type: DataTypes.STRING },
  userId: {
    allowNull: false,
type: DataTypes.INTEGER, 
    references: {
      model: 'Users',
      key: 'id',
    }, 
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE' },
  published: {
    allowNull: false, type: DataTypes.DATE },
  updated: {
    allowNull: false, type: DataTypes.DATE }, 
  };

module.exports = (sequelize, _DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    blogPostsAtributes,
    { tableName: 'BlogPosts', timestamps: false },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };

  return BlogPost;
};
