const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require('dotenv').config();

router.post("/", async (req, res) => {
    try {
        const bearerHeader = req.headers["authorization"];
        const token = bearerHeader && bearerHeader.split(" ")[1];
        if (token === null) return res.sendStatus(401);

        const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

        const decodedToken = jwtmod.verify(token, public_key, {
            algorithms: ["RS256"],
        });

        const { email } = decodedToken;
        res.status(200).send(email);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
