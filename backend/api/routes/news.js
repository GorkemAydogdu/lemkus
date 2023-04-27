const express = require("express");

const newsRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

newsRoutes.route("/news").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");

  try {
    var news = await db_connect.collection("news").find({}).toArray();
    res.json(news);
  } catch (e) {
    console.log("An error occured pulling the news : " + e);
  }
});

newsRoutes.route("/news/:id").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");
  let myquery = { _id: new ObjectId(req.params.id) };
  try {
    var filterProduct = await db_connect.collection("news").findOne(myquery);
    res.json(filterProduct);
  } catch (e) {
    console.log("An error occured pulling the news : " + e);
  }
});

module.exports = newsRoutes;
