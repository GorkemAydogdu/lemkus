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

// wishlistRoutes.route("/wishlist/remove/:id").delete((req, response) => {
//   let db_connect = dbo.getDb("dbLemkus");
//   let myquery = { _id: new ObjectId(req.params.id) };
//   db_connect.collection("wishlist").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     response.json(obj);
//   });
// });

// wishlistRoutes
//   .route("/wishlist/remove/:id")
//   .delete(async function (req, response) {
//     try {
//       let db_connect = dbo.getDb("dbLemkus");
//       let myquery = { _id: new ObjectId(req.params.id) };
//       let result = db_connect.collection("wishlist").deleteOne(myquery);
//       response.status(result).status(200);
//     } catch (e) {
//       console.log("An error occured pulling the wishlist : " + e);
//     }
//   });

module.exports = wishlistRoutes;
