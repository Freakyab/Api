
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require('dotenv').config();
const client = new MongoClient(process.env.DB_URL);

router.get("/", async (req, res) => {

    try {
        var items = req.query.items;
        items = JSON.parse(items);
        if (items[0] == 0) {
            items = items.slice(1, items.length);
        }
        await client.connect();
        const db = client.db("PassDb");
        const collection = await db.collection("ProjectData");
        let flag = false;
        await collection.deleteMany({});
        for (const item of items) {
            if (item != false) {
                await collection.insertOne({ items: item });
                flag = true;

            }
        }


        if (flag) {
            res.json({ status: true, msg: "inserted"  });
        } else {
            res.json({ status: false});
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;