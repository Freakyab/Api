// Require modules
const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});


router.get("/", async (req, res) => {
    try {
        const userId = req.query.userId;
        await client.connect();
        const db = client.db("LinkedCopy");
        const collection = await db.collection("UserData").aggregate().toArray();
        flag = false;


        collection.map((e) => {
            if (e._id.toString() === (userId)) {
                Post = e.post;
                Name = e.name
                flag = true;
            }
        });
        console.log(Post)
        if (flag) {
            res.json({ status: true, post: Post,Name: Name });
        } else {
            res.json({ status: false });
        }

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;