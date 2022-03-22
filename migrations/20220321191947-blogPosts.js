module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      title: {
        allowNull: false, type: DataTypes.STRING },
      content: {
        allowNull: false, type: DataTypes.STRING },
      userId: {
        allowNull: false, type: DataTypes.INTEGER, 
        references: {
          model: 'Users',
          key: 'id',
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',},
      published: {
        allowNull: false, type: DataTypes.DATE },
      updated: {
        allowNull: false, type: DataTypes.DATE }, 
      }); 
  },
  down: async (queryInterface, _DataTypes) => {
    await queryInterface.dropTable('BlogPosts');
  },
};
