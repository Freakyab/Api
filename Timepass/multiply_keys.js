// Require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');

require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    // const { username, password } = req.body;
    try {

        //connect to database
        await client.connect();
        const db = client.db("Tokenkey");

        const collection = await db.collection("key").find({}).toArray();

        const newCollection = await db.collection("generated_key").find({}).toArray();

        const mainKey = collection[0].main;


        console.log(typeof newCollection[0].token[0].key)
        try {
            token = jwt.verify(newCollection[0].token[1].key, mainKey);
            console.log(token);
        }
        catch (err) {
            console.log(false);
        }
        
        res.json({ status: true });

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;