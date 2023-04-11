const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/product"));
app.use(require("./routes/news"));
app.use(require("./routes/menu"));
app.use(require("./routes/brands"));
app.use(require("./routes/collections"));
app.use(require("./routes/wishlist"));
app.use(require("./routes/orders"));
// get driver connection
const dbo = require("./db/conn");

//https://www.mongodb.com/community/forums/t/solved-mern-tutorial-issue-cannot-read-properties-of-undefined-reading-collection/212521
app.listen(port, async () => {
  // perform a database connection when server starts
  await dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
