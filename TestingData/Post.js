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
    const { caption, userId } = req.body;

    try {
        if (caption === undefined || userId === undefined || caption === "" || userId === "" || caption === null || userId === null) {
            return res.json({ status: false });
        }

        let flag = false;
        let insertFlag = false;

        //connect to database
        await client.connect();
        const db = client.db("Testing");
        const collection = db.collection("PostData");
        const userCollection = db.collection("UserData");


        const date = new Date();
        const finalDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        const name = await data.GetName(client, "Testing", "UserData", userId);

        const respond = await collection.insertOne(
            {
                name: name,
                caption: caption,
                like: [],
                comment: [],
                time: finalDate,
                userId: userId
            }
        )
        if (respond.insertedId != null) {
            insertFlag = true;
        }
        if (insertFlag) {
            var Post = await data.GetData(client, "Testing", "UserData", userId);
            if (Post === 0) {
                Post = [];
                Post.push(respond.insertedId.toString());
            }
            else {
                Post.push(respond.insertedId.toString());
            }
            if (userCollection.updateMany(
                { _id: ObjectId(userId) },
                { $set: { post: Post } }
            )) {
                flag = true;
            }
        }

        if (flag) {
            res.json({ status: true, postId: respond.insertedId.toString() });
        }
        else {
            res.json({ status: false });
        }


    } catch (error) {
        console.error(error);
        res.json({ status: false, msg: "Server error" });
        return res.status(500).send("Server error");
    }
});

module.exports = router;