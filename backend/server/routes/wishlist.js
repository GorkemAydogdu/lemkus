const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const wishlistRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

wishlistRoutes.route("/wishlist").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  try {
    var news = await db_connect.collection("wishlist").find({}).toArray();
    res.json(news);
  } catch (e) {
    console.log("An error occured pulling the wishlist : " + e);
  }
});

wishlistRoutes.route("/wishlist/:id").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  let myquery = { _id: new ObjectId(req.params.id) };
  try {
    var filterWishlist = await db_connect
      .collection("wishlist")
      .findOne(myquery);
    res.json(filterWishlist);
  } catch (e) {
    console.log("An error occured pulling the wishlist : " + e);
  }
});

wishlistRoutes.route("/wishlist/add").post(async function (req, response) {
  try {
    let db_connect = dbo.getDb("dbLemkus");
    let myobj = {
      productId: req.body.productId,
      name: req.body.name,
      price: req.body.price,
      clickedSize: req.body.clickedSize,
      images: req.body.images,
      userName: req.body.userName,
      email: req.body.email,
    };
    let result = db_connect.collection("wishlist").insertOne(myobj);
    response.send(result).status(200);
  } catch (e) {
    console.log("An error occured pulling the wishlist : " + e);
  }
});

wishlistRoutes.route("/wishlist/remove/:id").delete(async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = dbo.getDb("dbLemkus").collection("wishlist");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

module.exports = wishlistRoutes;
