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
        var flag = false;
        var lessData = false;
        
        var Post;
        var feedData = [];
        //connect to database
        await client.connect();
        const db = client.db("Testing");
        const collection = await  db.collection("PostData").aggregate().toArray();
        
        if(collection.length < nofData){
            for (let i = 0; i < collection.length; i++) {
                feedData.push(collection[i]);
            }
            lessData = true;
            flag = true;
        }
        else{
            for (let i = 0; i < nofData; i++) {
                feedData.push(collection[i]);
            }
            flag = true;
        }        

        feedData.sort((a, b) => {
            return Math.random() - 0.5;
        })

        if (flag) {
            res.json({ status: true, post: feedData, lessData: lessData});
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