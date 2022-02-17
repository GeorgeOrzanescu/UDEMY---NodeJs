const path = require("path");
const express = require("express");
const rootDir = require("../helper/path");
const router = express.Router();

router.get("/add-product", (req, resp, next) => {
  // resp.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
  // resp.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  resp.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, resp, next) => {
  // this will trigger only on POST requests
  // console.log(req.body);
  resp.redirect("/");
});

module.exports = router;
