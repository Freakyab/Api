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
        const nofData = req.query.no;
        const render = req.query.render;
        
        if(render === "true") return;
        
        let flag = false;
        let lessData = false;
        
        let feedData = [];
        let userId = [];

        //connect to database
        await client.connect();
        const db = client.db("Testing");
        const collection = await  db.collection("PostData").aggregate().toArray();

        collection.sort((a, b) => {
            return Math.random() - 0.5;
        })
        
        if(collection.length < nofData){
            for (let i = 0; i < collection.length; i++) {
                feedData.push(collection[i]);
                userId.push(`${collection[i].userId} ${collection[i]._id}`);
            }
            lessData = true;
            flag = true;
        }
        else{
            for (let i = 0; i < nofData; i++) {
                feedData.push(collection[i]);
                userId.push(`${collection[i].userId} ${collection[i]._id}`);
            }

            flag = true;
        }        

        feedData.sort((a, b) => {
            return Math.random() - 0.5;
        })

        if (flag) {
            res.json({ status: true, post: feedData, lessData: lessData, userId: userId });
        }
        else {
            res.json({ status: false });
        }
        
        
    } catch (error) {
        console.error(error);
        res.json({ status: false });
        return res.status(500).send("Server error");
    }
});

module.exports = router;