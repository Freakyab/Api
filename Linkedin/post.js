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
        const caption = req.query.caption;
        await client.connect();
        const db = client.db("LinkedCopy");
        const Collection = await db.collection("UserData");
        const collection = await db.collection("UserData").aggregate().toArray();

        collection.map((item) => {
            if (item._id.toString() == userId) {
                Post = item.post;
            }
        });
        captionItem = {}
        // console.log(captionItem);
        if (Post === 0) {
            captionItem[1] = caption
            Post = [
                captionItem
            ]
        }
        else {
            const postCount = Post[0];
            const keys = Object.keys(postCount).map(key => parseInt(key)).sort((a, b) => a - b);
            const nextKey = keys[keys.length - 1] + 1;
            
            postCount[nextKey] = caption; // add a new key-value pair to the object
            console.log(Post); 

        }
        if (
            Collection.updateMany(
                { _id: ObjectId(userId) },
                { $set: { post: Post } }
            )
        )
            res.json({ status: true, post: Post })
        else
            res.json({ status: false })
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;