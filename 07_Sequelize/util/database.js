const Sequalize = require("sequelize");

const sequelize = new Sequalize("node-complete", "root", "george0729002256", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
