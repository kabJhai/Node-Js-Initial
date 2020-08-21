//Make a database connection
const Sequelize = require('sequelize');
//Sequelize("database_name","user_name","password",{host:'127.0.0.1',dialect:'mysql',operatorAliases:false})
const sequelize = new Sequelize("social_network","root","root",
{host:'127.0.0.1',
dialect:'mysql',
operatorAliases:false});

module.exports = sequelize;

//Make the sequelize object global
global.sequelize = sequelize;