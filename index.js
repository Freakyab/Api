const express = require("express");
const mongo = require("./api/mongo");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
// const { MongoClient } = require("mongodb");
// const router = express.Router();

// const client = new MongoClient(
//   "mongodb+srv://DynamicA:D0j3iO5c23I9Lmbo@cluster0.wxp0mkv.mongodb.net/?retryWrites=true&w=majority"
// );

// router.get("/", async (req, res) => {

//   try {
//     await client.connect();
//     const db = client.db("PassDb");
//     const collection = await db.collection("Pass").aggregate().toArray();
//     console.log(collection[0].name);
//     res.json(collection[0].name);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Server error");
//   }
// });

app.use("/api/mongo", mongo);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// app.listen(PORT,{} => console.log('Server started on port ${PORT}')); 