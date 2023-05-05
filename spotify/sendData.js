const express = require("express");
const jwtmod = require("jsonwebtoken");
const router = express.Router();
require('dotenv').config();

router.get("/", async (req, res) => {
    try {
        const bearerHeader = req.headers["authorization"];
        const token = bearerHeader && bearerHeader.split(" ")[1];
        if (token === null) return res.sendStatus(401);

        const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

        const decodedToken = jwtmod.verify(token, public_key, {
            algorithms: ["RS256"],
        });
        const { name } = decodedToken;
        console.log(name);
        res.status(200).json({name});
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
