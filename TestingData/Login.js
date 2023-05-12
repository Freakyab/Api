// Require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    try {
        var username = req.query.username;
        var password = req.query.password;
        var flag = false;
        var userId;
        var name;
        //connect to database
        await client.connect();
        const db = client.db("Testing");

        const collection = await db.collection("AccountData").aggregate().toArray();

        collection.find((e) => {
            if (e.userName === username) {
                
                if (e.password === password) {
                    flag = true;
                    userId = e._id;
                    name = e.name;
                }
            }
        });
        if (flag) {
            res.json({ status: true, userId: userId,name : name });
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