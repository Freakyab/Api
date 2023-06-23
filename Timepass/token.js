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

        const mainKey = jwt.sign({ type: 'main' }, require('crypto').randomBytes(32).toString('hex'));

        const digits = '0123456789';
        let otp = '';
        const collection = await db.collection("key").insertOne({ main: mainKey });

        const additionalKeys = [];
        for (let i = 0; i < 30; i++) {
            for (let i = 0; i < 5; i++) {
                otp += digits[Math.floor(Math.random() * 10)];
            }
            const key = jwt.sign({ type: otp }, mainKey);
            additionalKeys.push({otp,key});
            otp = '';
        }

        const newCollection = await db.collection("generated_key").insertOne({ token: additionalKeys })



        if (collection.insertCount === 1 && newCollection.insertCount >= 1) {
            res.json({ status: true, userId: userId });
        }
        else {
            res.json({ status: false });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;