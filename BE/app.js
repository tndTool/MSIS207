const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user");
const cookie = require("cookie-parser");
const page = require("./routers/page");
const auth = require("./controllers/auth");
const bodyparser = require("body-parser");
const app = express();
const port = 4000;

app.use(cookie());
// app.use(express.static("./public/asset"));
// app.use("/js", express.static("./public/js"));
// app.use("/", page);
// app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
});

mongoose
  .connect("mongodb+srv://dop:Tiensi1408@dop.xzl7rjj.mongodb.net/webdev")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database not connected" + err);
  });

app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use("/api", auth);
