const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callBack) => {
  fs.readFile(p, (error, fileContent) => {
    if (error) {
      return callBack([]);
    } else {
      callBack(JSON.parse(fileContent));
    }
  });
};

const products = [];
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // save() is a method to add a new product to the products array
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBack) {
    // static fetchAll() is a method to return all products in the products array
    // available to the Product class itself and not an instance of the

    getProductsFromFile(callBack);
  }
};
