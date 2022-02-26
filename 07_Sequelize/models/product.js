const Sequalize = require("sequelize"); // main library

const sequelize = require("../util/database"); // our connection to the database

// define the table name and the attributes
const Product = sequelize.define("product", {
  // use define method to create a table in the database
  id: {
    type: Sequalize.INTEGER, // type of the column
    autoIncrement: true, // auto increment the id
    allowNull: false, // allow null
    primaryKey: true, // primary key
  },
  title: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequalize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = Product; // export the model
