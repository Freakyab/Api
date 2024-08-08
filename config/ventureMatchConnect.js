const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const connectUrl = process.env.VENTUREMATCHDBLINK;

mongoose.createConnection(connectUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;