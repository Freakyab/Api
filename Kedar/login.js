const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_kedar, {
  useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    //connect to database
    await client.connect();
    const db = client.db("MINI-PROJECT");
    const collection = db.collection("Login");

    const result = await collection.findOne({ username });

    if (result.password === password) {
      res.json({ status: true, message: "success", data: result });
    } else {
      res.json({
        status: false,
        msg: "login failed please check creditendials",
      });
    }
  } catch (error) {
    console.error(error);
    res.json({ status: false, msg: "Server error" });
  }
});

module.exports = router;
