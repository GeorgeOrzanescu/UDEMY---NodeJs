const path = require("path");
const sequelize = require("./util/database"); // our connection to the database

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// Import models
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cartItem");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { Server } = require("http");

// db.execute("SELECT * FROM products")
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// DEFINE MODELS
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User); // optional same think as above
Cart.belongsToMany(Product, { through: CartItem }); // CartItem is an intermediate table
Product.belongsToMany(Cart, { through: CartItem });

// connect to the database
sequelize
  // .sync({ force: true })   // force: true will drop the table if it already exists
  // because we want to create a the relantionship between the tables

  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    // if user is not found, create a new user
    if (!user) {
      return User.create({
        name: "George",
        email: "dummy@gmail.com",
      });
    }
    // return Promise.resolve(user); // if user exists, return the user as a promise
    return user;
    // by default when u return inside a then block, it will resolve the promise
  })
  .then((user) => {
    if (!user.getCart()) {
      return user.createCart();
    }
    return user.cart;
  })
  .then((cart) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
