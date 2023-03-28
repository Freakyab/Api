// Require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    try {
        var username = req.query.username;
        var password = req.query.password;

        var flag = false;
        var userId;

        //connect to database
        await client.connect();
        const db = client.db("PassDb");

        const collection = await db.collection("Pass").aggregate().toArray();

        collection.find((e) => {
            if (e.username === username) {
                if (e.password === parseInt( password)) {
                    flag = true;
                    userId = e._id;

                }
            }
        });
        if (flag) {
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