const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.DB_URL, {
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.post('/', async(req, res) => {
  try{
    await client.connect();
    const db = client.db('sample_geospatial');
    const collection = db.collection('shipwrecks');

    //  Collection insert Titanic;
    collection.insertOne({name: 'Titanic'})

    // Collection update Titanic to Titanic1;
    // const Collection = await  collection.updateOne({name: 'Titanic'}, {$set: {name: 'Titanic1'}})

    // Collection Find Titanic1;
    // const Collection = await collection.find({name : "Titanic1"}).toArray();

    // Collection FindOne titanic1;
    // const findOne = await collection.findOne({name : "Titanic1"});
    // console.log(findOne);

    // Collection Delete Titanic1;
    // const delete_data = await collection.deleteOne({name : "Titanic1"});
    // console.log(delete_data);
    
  // console.log(updateAdd_data);
    // await collection.updateMany({feature_type : "Wrecks - Submerged, dangerous"}, {$set: {feature_type: "Wrecks - Submerged, dangerous1"}})
    // const Collection = await collection.find({
    //   feature_type : "Wrecks - Submerged, dangerous"
    // }).toArray();
    // await collection.deleteMany({feature_type : "Wrecks - Submerged, dangerous1"})
    // const Collection = await collection.find({feature_type : "Wrecks - Submerged, dangerous1"}).toArray();
  }catch(err){
    console.log(err);
  }
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
