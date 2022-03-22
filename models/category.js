const { DataTypes } = require('sequelize');

const categoriesAtributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const Category = sequelize.define(
    'Category',
    categoriesAtributes,
    { tableName: 'Categories', timestamps: false },
  );
  return Category;
};
