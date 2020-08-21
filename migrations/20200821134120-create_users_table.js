'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',{
        id: {
          type: Sequelize.INTEGER(11),
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
      },
      username: {
          type:Sequelize.STRING(300),
          allowNull:false,
          unique:true
      },
      passwd:{
          type:Sequelize.STRING(20),
          allowNull: false
      }
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
