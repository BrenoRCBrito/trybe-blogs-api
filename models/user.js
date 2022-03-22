const { DataTypes } = require('sequelize');

const userAtributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const User = sequelize.define(
    'User', userAtributes,    
    { tableName: 'Users', timestamps: false },
  );
  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPosts' });
  };
  return User;
};
