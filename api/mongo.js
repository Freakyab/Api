
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require('dotenv').config();
const client = new MongoClient(
    process.env.DB_URL
);

router.get("/", async (req, res) => {

    try {
        await client.connect();
        const db = client.db("PassDb");
        const collection = await db.collection("Pass").aggregate().toArray();
        console.log(collection[0].name);
        return res.json(collection);
        // return res.json(collection);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;