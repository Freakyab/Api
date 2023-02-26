// Require modules
const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const { post } = require("./delete");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    try {
        var like = req.query.like;
        like = parseInt(like);
        const likeId = req.query.likeId;
        const userId = req.query.userId;
        const index = req.query.index;

        var Post;
        var LikeUsername;
        var isExists = false;
        var flag = false;
        var LikedArray = []

        //connect to database
        await client.connect();
        const db = client.db("LinkedCopy");

        const collection = await db.collection("UserData").aggregate().toArray();
        const UserDatacollection = await db.collection("UserData")

        collection.find((e) => {
            if (e._id.toString() === userId) {
                isExists = true;
                Post = e.post;
            }
        });

        collection.find((e) => {
            if (e._id.toString() === likeId) {
                LikeUsername = e.name;
            }
        })

        if (isExists) {
            const LikeCount = Post[1];
            LikedArray = LikeCount[index];

        
            if (like === 1) {
                console.log(LikedArray.length)
                if (LikedArray.length === 0||LikedArray.length === undefined) {
                    console.log(LikeUsername)
                    LikeCount[index] = [LikeUsername];
                    flag = true;
                } else {

                    LikedArray.map((e) => {
                        if (e !== LikeUsername) {
                            LikeCount[index] = [...LikedArray, LikeUsername];
                            flag = true;
                        } else {
                            res.json({ status: false })
                        }
                    })
                }
            }
            else if (like === 0) {
                LikedArray.map((e) => {
                    if (e === LikeUsername) {
                        LikeCount[index] = LikedArray.filter((e) => e !== LikeUsername);
                        flag = true;
                    } else {
                        res.json({ status: false })
                    }
                })
            }

            if (flag) {
                if (
                    UserDatacollection.updateMany(
                        { _id: ObjectId(userId) },
                        { $set: { post: Post } }
                    )
                )
                    res.json({ status: true, LikeCount: LikeCount[index], like: LikeCount[index].length,post:Post })
                else
                    res.json({ status: false })
            }
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;