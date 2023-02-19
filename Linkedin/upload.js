// require the firebase-functions package for deployment
const express = require('express');
const admin = require('firebase-admin');

const router = express.Router();

// Initialize the Firebase Admin SDK with your project credentials

// Create a Firestore database reference
const db = admin.firestore();
// for login 
router.use("/", (req, res) => {

    // query the database
    file = req.query.file;
    try{
        const storageRef = admin.storage().ref();
        const fileref = storageRef.child('images/' + file.name)
        fileref.put(file).then(() => {
            res.json({ status: true })
        }).catch((error) => {
            console.error(error);
        });
    }
    catch(error){
        console.error(error);
    }
})

module.exports = router;