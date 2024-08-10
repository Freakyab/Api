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

    // Find and sort by _id in descending order to get the most recent images first
    const images = await collection
      .find()
      .sort({ _id: -1 }) // Sort by _id in descending order (most recent first)
      .skip(skipValue)
      .limit(2)
      .toArray();

    // Return the images as a response
    return res.status(200).json(images);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  } finally {
    await client.close(); // Ensure the client is closed after the request is handled
  }
});

router.post("/upload", async (req, res) => {
  try {
    // Connect to database
    const { image, link } = req.body;
    console.log(image);
    await client.connect();
    const db = client.db("imageSaver");
    const collection = db.collection("ImageUploader");

    // Find and limit the results, then skip the previous records
    const doc = await collection.insertOne({
      image,
      link,
      visibility: false,
    });
    if (doc.insertedId) {
      return res.status(200).json({
        message: "Image uploaded successfully",
        status: true,
        doc : {
          _id : doc.insertedId,
          image,
          link,
          visibility: false
        }
      });
    } else {
      return res.status(400).json({
        message: "Image not uploaded",
        status: false,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
      status: false,
    });
  } finally {
    await client.close(); // Ensure the client is closed after the request is handled
  }
});

module.exports = router;
