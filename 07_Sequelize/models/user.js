const Sequalize = require("sequelize"); // main library

const sequelize = require("../util/database"); // our connection to the database

const User = sequelize.define("user", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequalize.STRING,
  },
  email: {
    type: Sequalize.STRING,
  },
}); // define the table name and the attributes

module.exports = User; // export the model
