// module.exports = router;
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const client = new MongoClient(
  "mongodb+srv://aniruddhagawali:RjBBQ5A8KyhMMnRp@shopmanager.qegag9v.mongodb.net/?retryWrites=true&w=majority"
);
router.get("/", async (req, res) => {

  try {
    console.log("Connecting to database");
    const collection = client.db("product").collection("productlist");

    console.log("Connected to database");
    // Call client.connect() after defining the collection object
    client.connect();

    console.log("Retrieving data");
    // console.log(collection);
    const data = await collection.aggregate().toArray();
    console.log("Data retrieved");

    return res.json({
      status: 200,
      message: "Data retrieved successfully",
      data: data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  } finally {
    client.close();
  }
});


module.exports = router;
