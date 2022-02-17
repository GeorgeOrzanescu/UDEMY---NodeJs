// const http = require("http");  // we don't need this anymore
const bodyParser = require("body-parser");
const express = require("express");

const app = express(); // this holds objects
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.use((req, resp, next) => {
//   console.log("In the middleware!");
//   next(); // Allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({ extended: false })); // this will parse forms into objects
app.use(express.static(path.join(__dirname, "public"))); // this will serve static files

// MOVED IN ROUTES admin.js
/*app.use("/add-product", (req, resp, next) => {
  resp.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, resp, next) => {
  // this will trigger only on POST requests
  console.log(req.body);
  resp.redirect("/");
});*/

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, resp, next) => {
  // resp.status(404).send("<h1>Page not found</h1>");
  resp.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// MOVED IN ROUTES shop.js
// app.use("/", (req, resp, next) => {
//   resp.send("<h1>Hello from Express</h1>");
// });

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // this in the background does exactly what the 2 lines commented aboce does
