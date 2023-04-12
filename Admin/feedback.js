const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require('dotenv').config();
const client = new MongoClient(process.env.DB_URL);

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const data = { name, email, message };
        // Save the data to MongoDB
        await client.connect();
        const db = client.db("PassDb");
        const collection = db.collection("feedback");
        await collection.insertOne(data);
        res.status(200).json({ message: "Message received" });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
 
module.exports = router;
