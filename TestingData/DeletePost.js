const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();
const data = require("./data");
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

router.delete("/", async (req, res) => {
    try {
        const { userId, postId } = req.body;
        var flag = false;
        var deleteFlag = false;
        var Post;

        //connect to database
        await client.connect();
        const db = client.db("Testing");
        const userCollection = await db.collection("UserData").aggregate().toArray();
        const Collection = await db.collection("UserData");
        const collection = await  db.collection("PostData");
        userCollection.find((e) => {
            if (e._id.toString() === userId) {
                Post = e.post;
            }
        }
        )
        if (Post === 0) {
            res.json({ status: false, message: "null data" });
        }
        else {
            if (Post.length === 1) {
                if (Post.includes(postId)) {
                    Post = 0;
                    deleteFlag = true;
                }
            } else {
                if (Post.includes(postId)) {
                    Post.splice(Post.indexOf(postId), 1);
                    deleteFlag = true;
                }
            }
        }
        if (deleteFlag) {
            collection.deleteOne({ _id: ObjectId(postId) });

            Collection.updateMany(
                { _id: ObjectId(userId) },
                { $set: { post: Post } }
            );
            flag = true;
        }
        if (flag) {
            res.json({ status: true});
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