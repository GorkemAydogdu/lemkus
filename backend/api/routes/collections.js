const express = require("express");

const collectionsRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

collectionsRoutes.route("/collections").get(async function (req, res) {
  let db_connect = dbo.getDb("dbLemkus");

  try {
    var news = await db_connect.collection("collections").find({}).toArray();
    res.json(news);
  } catch (e) {
    console.log("An error occured pulling the news : " + e);
  }
});

module.exports = collectionsRoutes;
