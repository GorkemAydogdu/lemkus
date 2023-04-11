const express = require("express");

const ordersRoutes = express.Router();
const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

ordersRoutes.route("/orders").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  try {
    var orders = await db_connect.collection("orders").find({}).toArray();
    res.json(orders);
  } catch (e) {
    console.log("An error occured pulling the orders : " + e);
  }
});

ordersRoutes.route("/orders/:id").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  let myquery = { _id: new ObjectId(req.params.id) };
  try {
    var filterOrders = await db_connect.collection("orders").findOne(myquery);
    res.json(filterOrders);
  } catch (e) {
    console.log("An error occured pulling the orders : " + e);
  }
});

ordersRoutes.route("/orders/add").post(async function (req, response) {
  try {
    let db_connect = dbo.getDb("dbLemkus");
    let myobj = {
      items: req.body.cartItems,
      totalPrice: req.body.totalPrice,
      country: req.body.country,
      address: req.body.address,
      city: req.body.city,
      phone: req.body.phone,
      userName: req.body.userName,
      email: req.body.email,
    };
    let result = db_connect.collection("orders").insertOne(myobj);
    response.send(result).status(200);
  } catch (e) {
    console.log("An error occured pulling the orders : " + e);
  }
});

module.exports = ordersRoutes;
