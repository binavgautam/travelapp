// Express server
const express = require("express");
const app = express();
const cors = require("cors");
require("express-async-errors");
const config = require("./utils/config");
const { connectToDatabase } = require("./utils/db");
const { postRouter } = require("./controllers");
const logger = require("./utils/logger");

//  Bunch of middlewares and stuff to use`
app.use(express.json());
app.use(cors());
app.use("/api/posts", postRouter);
// app.use(express.static("dist"));

// Wait to connect to the database
const start = async () => {
  await connectToDatabase();
  app.listen(config.PORT, () => {
    logger.info(`Server running on ${config.PORT}`);
  });
};

start();
