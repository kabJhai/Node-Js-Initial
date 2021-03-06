const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define("Users",{
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
});