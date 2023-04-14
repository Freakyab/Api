
const { MongoClient } = require("mongodb");
const express = require("express");
const { parse } = require("dotenv");
const router = express.Router();
require('dotenv').config();
const client = new MongoClient(process.env.DB_URL);

router.post("/", async (req, res) => {
    try {
        var items = req.query.items;
        items = JSON.parse(items);
        if (items[0] == 0) {
            items = items.slice(1, items.length);
        }
        await client.connect();
        const db = client.db("PassDb");
        const collection = db.collection("ProjectData");
        const CollectionArray = await collection.aggregate().toArray();
        let flag = false;
        let insertFlag = [false, ""];
        let itemsBucket = [];
        let orgoBucket = [];
        let RepoBucket = [];
        if (CollectionArray.length === 0) {
            items.map((e) => {
                if (e[0] !== false)
                    collection.insertOne({ items: e })
            })
            flag = true;
        }
        else {
            items.map((e) => {
                if (e[0] !== false)
                    itemsBucket.push(e)
            })
            CollectionArray.map((e) => {
                if (e.items.type === "Orgo")
                    orgoBucket.push(e.items);
                else if (e.items.type === "Repo")
                    RepoBucket.push(e.items);
            })
            if (itemsBucket.length === 0) {
                if (items[0][1] === "Orgo")
                    CollectionArray.map(e => {
                        if (e.items.type === "Orgo")
                            collection.deleteOne({ items: e.items });
                    })
                else if (items[0][1] === "Repo")
                    CollectionArray.map(e => {
                        if (e.items.type === "Repo")
                            collection.deleteOne({ items: e.items });
                    })
            }
            else {
                itemsBucket.map((e) => {
                   if(e.type === "Orgo")
                   {
                        if(orgoBucket.length === 0)
                        {
                            collection.insertOne({ items: e });
                            flag = true;
                        }
                        else {
                            CollectionArray.map((e) => {
                                if (e.items.type === "Orgo")
                                    collection.deleteOne({ items: e.items });
                            })
                            insertFlag[0] = true;
                            insertFlag[1] = "Orgo";
                        }
                   }
                     else if(e.type === "Repo")
                     {
                        if(RepoBucket.length === 0)
                            {
                             collection.insertOne({ items: e });
                             flag = true;
                            }
                        else {
                            CollectionArray.map((e) => {
                                if (e.items.type === "Repo")
                                    collection.deleteOne({ items: e.items });
                            })
                             insertFlag[0] = true;
                             insertFlag[1] = "Repo";
                            }
                    }
                })
            }
            if (insertFlag[0]) {
                if (insertFlag[1] === "Orgo") {
                    itemsBucket.map((e) => {
                        if (e.type === "Orgo") {
                            collection.insertOne({ items: e });
                            flag = true;
                        }
                    })
                }
                else if (insertFlag[1] === "Repo") {
                    itemsBucket.map((e) => {
                        if (e.type === "Repo") {
                            collection.insertOne({ items: e });
                            flag = true;
                        }
                    })
                }
            }
        }
        if (flag) {
            res.json({ status: true});
        } else {
            res.json({ status: false });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;