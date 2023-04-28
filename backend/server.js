const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./api/routes/product"));
app.use(require("./api/routes/news"));
app.use(require("./api/routes/menu"));
app.use(require("./api/routes/brands"));
app.use(require("./api/routes/collections"));
app.use(require("./api/routes/wishlist"));
app.use(require("./api/routes/orders"));
// get driver connection
const dbo = require("./api/db/conn");

app.get("/", (req, res) => {
  res.send("root");
});
//https://www.mongodb.com/community/forums/t/solved-mern-tutorial-issue-cannot-read-properties-of-undefined-reading-collection/212521
app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
