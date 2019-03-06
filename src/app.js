/**
 * Module dependencies.
 */
const cors = require('cors');
const express = require("express");
const DB = require('./utilities/db-resolver');
const app = express();

//added for handle CORS issues
app.use(cors());

//Api end points
const apiRouter = require("./routes/api");
const baseRouter = require("./routes");

//Create new db according to env configurations
app.set('DB', DB);

app.use(require("express-redis")());
app.use('/', baseRouter);
app.use("/api", apiRouter);

module.exports = {app, DB};

