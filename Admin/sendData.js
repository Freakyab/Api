
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require('dotenv').config();
const client = new MongoClient(process.env.DB_URL);

router.get("/", async (req, res) => {

    try {
        await client.connect();
        const db = client.db("PassDb");
        var flag = false;
        var item = [];
        const collection = await db.collection("ProjectData").aggregate().toArray();
        collection.map((e) => {
                item.push(e.items);
                flag = true;
        })
        if(flag)
             res.json({ status: true, data: item });
        else
            res.json({ status: false ,data : 0});

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
 
module.exports = router;