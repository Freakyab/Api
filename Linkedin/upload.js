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
router.use("/", async (req, res) => {
    try {
        // query
        Linkpath = req.query.path;


        const bucket = admin.storage().bucket();


        // Function to upload a file to Cloud Storage
        async function uploadFileToStorage(filePath, destinationPath) {
            await bucket.upload(filePath, {
                destination: destinationPath,
                metadata: {
                    contentType: 'image/jpeg', // Change to the content type of your file
                },
            });

            console.log(`${filePath} uploaded to ${destinationPath}.`);
        }

        // Call the uploadFileToStorage function
        await uploadFileToStorage(Linkpath, 'images/image.jpg');

        const options = {
            version: 'v4',
            action: 'read',
            expires: Date.now() + 15 * 60 * 1000, // 15 minutes
        };

        // Get a signed URL for the file
        const [url] = await bucket.file('./image/image.jpg').getSignedUrl(options);

        console.log(`The signed URL for the file is: ${url}`);

        res.send('Image uploaded successfully');
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Error uploading image');
    }

})

module.exports = router;