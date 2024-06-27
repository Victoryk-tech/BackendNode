require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./route/productRoute");
const errorMiddleware = require("./Middleware/errMiddleware");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8000;
const FRONTEND = process.env.FRONTEND;
const MONGO_URL = process.env.MONGO_URL;

//browsers to access this api via cors
var grantAccess = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(express.json());
app.use(cors(grantAccess));
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is Devtamin");
});

app.use(errorMiddleware);
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port 8000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
