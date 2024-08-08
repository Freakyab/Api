const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

// Connect to MongoDB database
const client = new MongoClient(process.env.DB_URL, {
  useUnifiedTopology: true,
});

router.get("/get/:limit", async (req, res) => {
  try {
    // Connect to database
    const { limit } = req.params;
    const limitValue = parseInt(limit);
    const skipValue = limitValue > 2 ? limitValue - 2 : 0;

    await client.connect();
    const db = client.db("imageSaver");
    const collection = db.collection("ImageUploader");

    // Find and limit the results, then skip the previous records
    const images = await collection.find().skip(skipValue).limit(2).toArray();

    // Return the images as a response
    return res.status(200).json(images);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  } finally {
    await client.close(); // Ensure the client is closed after the request is handled
  }
});

module.exports = router;
