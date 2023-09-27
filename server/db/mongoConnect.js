const mongoose = require("mongoose");
const { DB } = require("../config");
// mongoose.Promise = global.Promise;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch((err) => {
    console.log(err);
  });