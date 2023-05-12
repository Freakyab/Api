const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();
const data = require("./data");
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
    const { userId,postId } = req.body;
    console.log(userId,postId);
    try {
        if (userId == null || postId == null) {
            return res.json({ status: false, message: "null data" });
        }
        let flag = false;
        
        let Like;

        //connect to database
        await client.connect();
        const db = client.db("Testing");
        const postCollection = await db.collection("PostData").aggregate().toArray();
        const collection = db.collection("PostData");

        postCollection.find((e) => {
            if (e._id.toString() === postId) {
                Like = e.like;
            }
        })
        const name = await data.GetName(client,"Testing","UserData",userId);

        if(Like.includes(name)){
            Like.splice(Like.indexOf(name),1);
        }
        else{
            Like.push(name)
        }
        if(collection.updateOne({_id:ObjectId(postId)},{$set:{like:Like}})){
            flag = true;
        }
        if (flag) {
            res.json({ status: true, like: Like });
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