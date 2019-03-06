/**
 * Module dependencies.
 */
const cors = require('cors');
const express = require("express");
const app = express();

//added for handle CORS issues
app.use(cors());

//Api end points
const apiRouter = require("./routes/api");
const baseRouter = require("./routes");

app.use(require("express-redis")());
app.use('/', baseRouter);
app.use("/api", apiRouter);

module.exports = app;

