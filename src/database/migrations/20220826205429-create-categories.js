'use strict';
module.exports = {

    /**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('Sequelize').DataTypes} DataTypes 
 */

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};