const express = require("express");
const cors = require("cors");
const mongo = require("./api/mongo");
const ProjectData = require("./api/ProjectData");

// LinkedinCopy
const login = require("./Linkedin/login");
const signup = require("./Linkedin/signup")
const post = require("./Linkedin/post");
const returnData = require("./Linkedin/return")
const SpecificPost = require("./Linkedin/specificPost")
const deletePost = require("./Linkedin/delete")
const like = require("./Linkedin/like")
const feed = require("./Linkedin/feed")

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/api/mongo", mongo);
app.use("/api/ProjectData", ProjectData);

// LinkedinCopy
app.use("/Linkedin/login", login);
app.use("/linkedin/signup", signup);
app.use("/linkedin/post", post);
app.use("/linkedin/returnData", returnData);
app.use("/linkedin/specificPost", SpecificPost);
app.use("/linkedin/deletePost", deletePost);
app.use("/linkedin/like", like)
app.use("/linkedin/feed", feed)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
