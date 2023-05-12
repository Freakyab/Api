const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

// Connect to MongoDB database
const client = new MongoClient(process.env.DB_URL_LI, {
  useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
  try {
    const postId = req.query.postId;
    await client.connect();
    const db = client.db("Testing");
    const collection = db.collection("PostData");
    const post = await collection.findOne({ _id: ObjectId(postId) });

    if (post) {
      res.json({ status: true, post: post })
    }
    else {
      res.json({ status: false })
    }
  } catch (error) {
    console.error(error);
    res.json({ status: false, msg: "Server error" });
    return res.status(500).send("Server error");
  }
});

module.exports = router;
