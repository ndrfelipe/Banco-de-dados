const Sequelize = require("sequelize")
const connection = new Sequelize("projetointegrador", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = database;