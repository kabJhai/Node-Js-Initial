'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tweets',{
          id: {
              type: Sequelize.INTEGER(11),
              allowNull:false,
              autoIncrement:true,
              primaryKey:true,
          },
          content: Sequelize.STRING(300),
          cretedAt:Sequelize.DATE,
          updatedAt: Sequelize.DATE,
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tweets');
  }
};
