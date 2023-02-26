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
        const like = req.query.like;

        await client.connect();
        const db = client.db("LinkedCopy");
        const Collection = await db.collection("UserData");
        const collection = await db.collection("UserData").aggregate().toArray();

        flag = true;

        collection.map((item) => {
            if (item._id.toString() == userId) {
                Post = item.post;
            }
        });
        captionItem = {}
        likeRef = {}
        
        if (Post === 0) {
            captionItem[1] = caption
            likeRef[1] = parseInt(like);
            Post = [captionItem, likeRef]

        }
        else {
            const CationCount = Post[0];
            const LikeCount = Post[1];
            const CaptionKeys = Object.keys(CationCount).map(key => parseInt(key)).sort((a, b) => a - b);
            const nextKey = CaptionKeys[CaptionKeys.length - 1] + 1;
            CationCount[nextKey] = caption; // add a new key-value pair to the object
            
            const CaptionKeysLike = Object.keys(LikeCount).map(key => parseInt(key)).sort((a, b) => a - b);
            const nextKeyLike =parseInt( CaptionKeysLike[CaptionKeysLike.length - 1] )+ 1;
            console.log(nextKeyLike)
                LikeCount[nextKeyLike] = [];
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