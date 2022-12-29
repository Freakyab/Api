
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const client = new MongoClient(
    "mongodb+srv://DynamicA:D0j3iO5c23I9Lmbo@cluster0.wxp0mkv.mongodb.net/?retryWrites=true&w=majority"
);

router.get("/", async (req, res) => {

    try {
        await client.connect();
        const db = client.db("PassDb");
        const collection = await db.collection("Pass").aggregate().toArray();
        console.log(collection[0].name);
        return res.json(collection[0].name);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
 
module.exports = router;