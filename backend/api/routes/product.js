const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
productRoutes.route("/product").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  try {
    var prodcuts = await db_connect.collection("products").find({}).toArray();
    res.json(prodcuts);
  } catch (e) {
    console.log("An error occured pulling the products : " + e);
  }
});

//https://stackoverflow.com/a/75744173
// This section will help you get a single record by id
productRoutes.route("/product/:id").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  let myquery = { _id: new ObjectId(req.params.id) };
  try {
    var filterProduct = await db_connect
      .collection("products")
      .findOne(myquery);
    res.json(filterProduct);
  } catch (e) {
    console.log("An error occured pulling the products : " + e);
  }
});

module.exports = productRoutes;
