const { MongoClient, ObjectId } = require("mongodb");
const express = require('express');
const router = express.Router();
require("dotenv").config();
// require the firebase-functions package for deployment
const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK with your project credentials
const serviceAccount = require('../testingdatabase-3d8ff-firebase-adminsdk-jp5l2-2f63ddcad6.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'testingdatabase-3d8ff.appspot.com'
});


// Require modules

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

router.get("/", async (req, res) => {
    try {
        const userId = req.query.userId;
        const deletePost = req.query.deletePost;
        const bucket = admin.storage().bucket();
        const folderName = `image/${userId}`;
        var fire = false;
        var mongo = false;
        var flag = false;
        var isSame = false;

        async function renameFiles(flag, bucket, folderName) {
            const [files] = await bucket.getFiles({
                prefix: folderName,
            });

            const fileCount = files.length;
            for (let i = 0; i < fileCount; i++) {
                const oldFile = files[i];
                const oldFileName = oldFile.name;
                const newFileName = `${folderName}/${i + 1}`;

                // Rename the file
                await oldFile.move(newFileName);
            }
            return flag = true;
        }

        // Delete the folder
        await client.connect();
        const db = client.db("LinkedCopy");
        const Collection = await db.collection("UserData");
        const collection = await db.collection("UserData").aggregate().toArray();
        collection.find((e) => {
            if (e._id.toString() == userId) {
                Post = e.post;
            }
        })

        if (Post === 0) {
            Post = 0;
            if (Collection.updateMany(
                { _id: ObjectId(userId) },
                { $set: { post: Post } }
            ))
                mongo = true;
            if (fire && mongo) {
                flag = true;
            }
            else
                flag = false;
        } else {
            const CationCount = Post[0];
            const LikeCount = Post[1];

            const keys = Object.keys(CationCount).map(key => parseInt(key)).sort((a, b) => a - b);
            const LikeKeys = Object.keys(LikeCount).map(key => parseInt(key)).sort((a, b) => a - b);
            

            const DeleteCaptionKey = keys[deletePost - 1];
            const deleteLikeKey = LikeKeys[deletePost - 1];

            delete CationCount[DeleteCaptionKey];
            delete LikeCount[deleteLikeKey];

            var DeleteCaptionKeys = Object.keys(CationCount).map(key => parseInt(key)).sort((a, b) => a - b);
            var deleteLikeKeys = Object.keys(LikeCount).map(key => parseInt(key)).sort((a, b) => a - b);


            values = Object.values(CationCount);
            LikeValues = Object.values(LikeCount);

            DeleteCaptionKeys.map((e, index) => {
                CationCount[index + 1] = values[index];
            })
            deleteLikeKeys.map((e, index) => {
                LikeCount[index + 1] = LikeValues[index];
            })

            
            if(keys.length ===1 && DeleteCaptionKeys.length === 0) {
                Post = 0;
                Collection.updateMany(
                    { _id: ObjectId(userId) },
                    { $set: { post: Post } })
                flag = true;
            }
            else {

                delete CationCount[DeleteCaptionKeys.length + 1]
                delete LikeCount[deleteLikeKeys.length + 1]

                    fire = await renameFiles(fire, bucket, folderName);

                    if (Collection.updateMany(
                        { _id: ObjectId(userId) },
                        { $set: { post: Post } }))
                    mongo = true;
                    if (fire && mongo) {
                        flag = true;
                    }
                    else
                        flag = false;
                }
            
            if (flag) {
                res.json({ status: true, post: Post })
            } else {
                res.json({ status: false })
            }

        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;