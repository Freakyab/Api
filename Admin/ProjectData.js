
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require('dotenv').config();
const client = new MongoClient(process.env.DB_URL);

router.get("/", async (req, res) => {

    try {
        const items = req.query.items;
        await client.connect();
        const db = client.db("PassDb");
        const collection = await db.collection("ProjectData");
        if(collection.insertOne({items }))
            res.json({ status: true });
        else
            res.json({ status: false });

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
 
module.exports = router;