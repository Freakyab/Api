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
        const username = req.query.username;
        const filename = req.query.filename;
        await client.connect();
        const db = client.db("LinkedCopy");
        const Collection = await db.collection("UserData");
        const collection = await db.collection("AccountData").aggregate().toArray();
        const userDatacollection = await db.collection("UserData").aggregate().toArray();
        // const UserDatacollection = await db.collection("UserData");
        var flag = false;
        var userId;
        var Post;
        collection.find((e) => {
            if (e.userName === username) {
                    flag = true;
                    userId = e._id;
            }
        });
        if(flag){
            userDatacollection.find((e)=>{
                if(e._id.toString() == userId){
                    Post = e.post;
                }
            })
            
        }
        const postCount = Post[0];
        console.log(postCount)
        if (flag && postCount[filename])
            res.json({ status: true, post: Post,userId:userId })
        else
            res.json({ status: false })
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;