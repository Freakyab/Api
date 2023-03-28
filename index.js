const express = require("express");
const cors = require("cors");
const adminLogin = require("./Admin/login");
// const ProjectData = require("./api/ProjectData");

// LinkedinCopy
const login = require("./Linkedin/login");
const signup = require("./Linkedin/signup")
const post = require("./Linkedin/post");
const returnData = require("./Linkedin/return")
const SpecificPost = require("./Linkedin/specificPost")
const deletePost = require("./Linkedin/delete")
const like = require("./Linkedin/like")
const feed = require("./Linkedin/feed")

// /Testing
const Login = require("./TestingData/Login");
const Signup = require("./TestingData/Signup");
const Post = require("./TestingData/Post");
const DeletePost = require("./TestingData/DeletePost");
const Like = require("./TestingData/Like");
const ProfileFeed = require("./TestingData/ProfileFeed");
const Feed = require("./TestingData/Feed");

const PORT = process.env.PORT || 5000;
const app = express();

// app.use(cors());
app.use("/Admin/login", adminLogin);
// app.use("/api/ProjectData", ProjectData);

// LinkedinCopy
app.use("/Linkedin/login", login);
app.use("/linkedin/signup", signup);
app.use("/linkedin/post", post);
app.use("/linkedin/returnData", returnData);
app.use("/linkedin/specificPost", SpecificPost);
app.use("/linkedin/deletePost", deletePost);
app.use("/linkedin/like", like)
app.use("/linkedin/feed", feed)

// Testing
app.use("/Testing/Login", Login);
app.use("/Testing/Signup", Signup);
app.use("/Testing/Post", Post);
app.use("/Testing/DeletePost", DeletePost);
app.use("/Testing/Like", Like);
app.use("/Testing/ProfileFeed", ProfileFeed);
app.use("/Testing/Feed", Feed);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
