require("dotenv").config();
require("./db/mongoConnect");
const { PORT } = require("./config");
const cors = require('cors')

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes/apiRoutes");
const app = express();
app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));
app.use("/", apiRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "../build/index.html")));
  }
);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

module.exports = app;