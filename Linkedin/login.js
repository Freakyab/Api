// require the firebase-functions package for deployment
const express = require('express');
const admin = require('firebase-admin');

const router = express.Router();

// Initialize the Firebase Admin SDK with your project credentials
const serviceAccount = require('./testingdatabase-3d8ff-firebase-adminsdk-jp5l2-2f63ddcad6.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'testingdatabase-3d8ff.appspot.com'
});

// Create a Firestore database reference
const db = admin.firestore();
// for login 
router.use("/", (req, res) => {

    // query the database
    username = req.query.username;
    password = req.query.password;

    db.collection('AccountData').get().then((e) => {
        e.forEach((doc) => {
            if (doc.data().username === username && doc.data().password === password) {
                Id = doc.id;
                data = doc.data();
                res.json({ status: true, userId: Id })
            } else {
                res.json({ status: false })
            }
        })
    }).catch((error) => {
        console.error(error);
    });

})

module.exports = router;