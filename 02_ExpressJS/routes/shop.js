const path = require("path");
const express = require("express");
const rootDir = require("../helper/path");

const router = express.Router();

router.get("/", (req, resp, next) => {
  // resp.send("<h1>Hello from Express</h1>");
  // resp.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  resp.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
