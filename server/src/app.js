const express = require("express");
const cors = require("cors");

const urlRoutes = require("./routes/url.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/url", urlRoutes);
module.exports = app;