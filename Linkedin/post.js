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
        const view = req.query.view;
        await client.connect();
        const db = client.db("LinkedCopy");
        const Collection = await db.collection("UserData");
        const collection = await db.collection("UserData").aggregate().toArray();


        collection.map((e) => {
            if (e._id.toString() === (userId)) {
                Post = e.post;
                console.log(e.post);
            }
        });
        if (view != 0) {
            Collection.updateMany(
                { _id: ObjectId(userId) },
                { $set: { post: Post + 1 } }
            );
        }
        if (view == 0) {
            res.json({ status: true, post: Post });
        } else {
            res.json({ status: true, post: Post + 1 });
        }

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;