'use strict';
module.exports = {

  /**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('Sequelize').DataTypes} DataTypes 
 */


  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        },
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};