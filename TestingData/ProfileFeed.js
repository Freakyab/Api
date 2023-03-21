const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();
const data = require("./data");
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    try {
        const userId = req.query.userId;


        var flag = false;
        
        var Post;
        var msg;
        var feedData = [];
        //connect to database
        await client.connect();
        const db = client.db("Testing");
        const Collection = await  db.collection("UserData").aggregate().toArray();
        const collection = await  db.collection("PostData").aggregate().toArray();
        
        Collection.find((e) => {
            if (e._id.toString() === userId) {
                Post = e.post;
            }
        })
        if (Post === 0) {
            msg = "null data";
        }
        else{
            collection.find((e) => {
                if (Post.includes(e._id.toString())) {
                    feedData.push(e);
                }
            })
            flag = true;
        }


        if (flag) {
            res.json({ status: true, post: feedData});
        }
        else {
            res.json({ status: false, message: msg });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;