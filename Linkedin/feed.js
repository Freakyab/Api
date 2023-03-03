// Require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL_LI, {
    useUnifiedTopology: true,
});

const specificSelector = (max, array, noOfdata) => {
    if (array.length === noOfdata) {
        return array;
    }

    const x = 0;
    const data = Math.floor(Math.random() * (max - x + 1)) + x;

    if (!array.includes(data)) {
        array.push(data);
    }

    return specificSelector(max, array, noOfdata);
}

const specificRandom = (x, y, array) => {
    let random = Math.floor(Math.random() * (y - x + 1)) + x;
    if (!array.includes(random)) {
        array.push(random);
    }
    else {
        return specificRandom(x, y, array)
    }
    return array;
}

const makedata = (keyArray, valueArray, nameArray, idArray, likeArray) => {
    let data = {};
    let data1 = {};
    let data2 = {};
    let data3 = {};
    let data4 = [];
    let data5 = {};
    for (let i = 0; i < valueArray.length; i = i + 1) {
        data1[i + 1] = keyArray[i];
        data[i + 1] = valueArray[i];
        data2[i + 1] = nameArray[i];
        data3[i + 1] = idArray[i];
        data5[i + 1] = likeArray[i];
    }
    data4 = [data1, data, data2, data3, data5];
    console.log(data4)
    return data4;
}

router.get("/", async (req, res) => {
    try {
        var noOfData = req.query.no;
        noOfData = parseInt(noOfData);
        var collectionLess = false;
        var isPostLess = false;
        var flag = false;
        //connect to database
        await client.connect();
        const db = client.db("LinkedCopy");
        const collection = await db.collection("UserData").aggregate().toArray();
        var data = [];
        const max = collection.length - 1;
        var userSelected = [];
        var keyLen = 0;
        var keyArray = [];
        var valueArray = [];
        var nameArray = [];
        var idArray = [];
        var likeArray = [];
        if (collection.length >= noOfData) {
                flag = true;
            for (let i = 0; i < noOfData; i++) {
                userSelected = await specificSelector(max, userSelected, noOfData);
            }
            userSelected.map((e, index) => {
                let keys = Object.keys(collection[userSelected[index]].post[0]);
                x = 0;
                y = keys.length - 1;
                let random = Math.floor(Math.random() * (y - x + 1)) + x;

                let key = keys[random];
                let value = collection[userSelected[index]].post[0][key];
                let name = collection[userSelected[index]].name;
                let id = collection[userSelected[index]]._id.toString();
                let like = collection[userSelected[index]].post[1][key];

                likeArray = [...likeArray, like];
                keyArray = [...keyArray, key];
                valueArray = [...valueArray, value];
                nameArray = [...nameArray, name];
                idArray = [...idArray, id];
                data = makedata(keyArray, valueArray, nameArray, idArray, likeArray);
            });
        } else {
            collectionLess = true;
            for (let i = 0; i < collection.length; i++) {
                key = Object.keys(collection[i].post[0]);
                userSelected = await specificSelector(max, userSelected, collection.length);
                keyLen = keyLen + key.length;
            }

            flag = true;
        }
        if (collectionLess) {
            for (let i = 0; i < userSelected.length; i++) {
                let keys = Object.keys(collection[userSelected[i]].post[0]);
                keys.map((key => {
                    let value = collection[userSelected[i]].post[0][key];
                    let name = collection[userSelected[i]].name;
                    let id = collection[userSelected[i]]._id.toString();
                    let like = collection[userSelected[i]].post[1][key];
                    likeArray = [...likeArray, like];
                    keyArray = [...keyArray, key];
                    valueArray = [...valueArray, value];
                    nameArray = [...nameArray, name];
                    idArray = [...idArray, id];
                }))
            }
            x= Math.random()
            keyArray = keyArray.sort(() => x - 0.5);
            valueArray = valueArray.sort(() =>x  - 0.5);
            nameArray = nameArray.sort(() => x - 0.5);
            idArray = idArray.sort(() => x - 0.5);
            likeArray = likeArray.sort(() => x - 0.5);
            if(keyLen>noOfData)
            {
                keyArray.length = noOfData;
                valueArray.length = noOfData;
                nameArray.length = noOfData;
                idArray.length = noOfData;
                likeArray.length = noOfData;
                data = makedata(keyArray, valueArray, nameArray, idArray, likeArray);
            }
            else{
                if(keyLen<noOfData)
                {
                    isPostLess = true;
                }
                data = makedata(keyArray, valueArray, nameArray, idArray, likeArray);
            }
            
        }

        res.json({ status: flag, post: data, isPost: isPostLess, collectionLess: collectionLess });

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;