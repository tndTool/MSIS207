import express from "express";
import mongoose from "mongoose";
import cookie from "cookie-parser";
import cors from "cors";
import postRouters from "./routers/posts.js";
import authRouters from "./routers/auth.js";
import userRouters from "./routers/users.js";
import topRouters from "./routers/top.js";
import bottomsRouters from "./routers/bottoms.js";
import accessoriesRouters from "./routers/accessories.js";
import homeRouters from "./routers/home.js";
import outwearRouters from "./routers/outwear.js";
import billRouters from "./routers/bill.js";
import productRouter from "./routers/products.js";


const app = express();
const port = 8800;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookie());
app.use("/api/posts", postRouters);
app.use("/api/home", homeRouters);
app.use("/api/outwear", outwearRouters);
app.use("/api/top", topRouters);
app.use("/api/bottoms", bottomsRouters);
app.use("/api/accessories", accessoriesRouters);
app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/bill", billRouters);
app.use("/api/product", productRouter);
app.use(express.static('./public/docs/'))


mongoose
.connect("mongodb+srv://dop:Tiensi1408@dop.xzl7rjj.mongodb.net/webdev")
.then(() => {
  console.log("database connected");
  })
  .catch((err) => {
    console.log("database not connected" + err);
  });


app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
});




