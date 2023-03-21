// require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
const data = require("./data");
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
  useUnifiedTopology: true,
});

// create data in database
async function createData(userID, name) {
  try {
    // connect to database
    await client.connect();
    const db = client.db("Testing");
    const collection = await db.collection("UserData");

    // asign basic structure to database
    collection.insertMany([
      {
        _id: userID,
        name: name,
        post: 0,
        followers: 0,
        following: 0,
      }
    ])
  } catch (error) {
    console.error(error);
  }
}
router.get("/", async (req, res) => {
  try {

    // get data from request
    const username = req.query.username;
    const name = req.query.name;
    const password = req.query.password;
    const email = req.query.email;

    // set the flag
    var isexist = 0;

    //connect to database
    await client.connect();
    const db = client.db("Testing");
    const collection = await db.collection("AccountData").aggregate().toArray();
    const AddCollection = db.collection("AccountData");

    //encryption
    // const salt = await bcrypt.genSalt(10);
    // const EnPassword = await bcrypt.hash(password, salt);

    //check the username and email
    collection.find((e) => {
      if (e.email === email) {
        isexist = 1;
      } else if (e.userName === username) {
        isexist = 2;
      }
    });
    //insert data into database if username and email is not exist
    if (isexist == 0) {
      AddCollection.insertOne(
        {
          userName: username,
          email: email,
          name: name,
          password: password,
          otp: null,
        },
        (err) => {
          if (err) {
            res.status(500).send("Server error");
          }
        }
      );
      const userID = await data.GetKey(client, "Testing", "AccountData", username);
      await createData(userID, name);
      res
        .status(200)
        .json({ isSignup: true, isEmailExist: false, isUsernameExist: false, userID: userID });
    } else if (isexist == 1) {
      res
        .status(200)
        .json({ isSignup: false, isEmailExist: true, isUsernameExist: false });
    } else if (isexist == 2) {
      res
        .status(200)
        .json({
          isSignup: false,
          isUsernameExist: true,
          isEmailExist: false
        });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
