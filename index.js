const express = require("express");
const cors = require("cors");
const adminLogin = require("./Admin/login");
const ProjectData = require("./Admin/ProjectData");
const sendData = require("./Admin/sendData");
const feedback = require("./Admin/feedback");

// LinkedinCopy
// const login = require("./Linkedin/login");
// const signup = require("./Linkedin/signup")
// const post = require("./Linkedin/post");
// const returnData = require("./Linkedin/return")
// const SpecificPost = require("./Linkedin/specificPost")
// const deletePost = require("./Linkedin/delete")
// const like = require("./Linkedin/like")
// const feed = require("./Linkedin/feed")

// /Testing
// const Login = require("./TestingData/Login");
// const Signup = require("./TestingData/Signup");
// const Post = require("./TestingData/Post");
// const DeletePost = require("./TestingData/DeletePost");
// const Like = require("./TestingData/Like");
// const ProfileFeed = require("./TestingData/ProfileFeed");
// const Feed = require("./TestingData/Feed");
// const share = require("./TestingData/share")

// Spotify 
const Spotify = require("./spotify/sendData");

// LabEntry (mini project )
const getData = require("./LabEntry/getData");
const lapRegister = require("./LabEntry/register");
const lapLogin = require("./LabEntry/login");

// Timepass
const token = require("./Timepass/token");
const newToken = require("./Timepass/multiply_keys");

// Kedar mini project
const kedarChallenges = require("./Kedar/challenges");
const kedarLogin = require("./Kedar/login");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/Admin/login", adminLogin);
app.use("/Admin/ProjectData", ProjectData);
app.use("/Admin/sendData", sendData);
app.use("/Admin/feedback", feedback);

// LinkedinCopy
// app.use("/Linkedin/login", login);
// app.use("/linkedin/signup", signup);
// app.use("/linkedin/post", post);
// app.use("/linkedin/returnData", returnData);
// app.use("/linkedin/specificPost", SpecificPost);
// app.use("/linkedin/deletePost", deletePost);
// app.use("/linkedin/like", like)
// app.use("/linkedin/feed", feed)

// Testing
// app.use("/Testing/Login", Login);
// app.use("/Testing/Signup", Signup);
// app.use("/Testing/Post", Post);
// app.use("/Testing/DeletePost", DeletePost);
// app.use("/Testing/Like", Like);
// app.use("/Testing/ProfileFeed", ProfileFeed);
// app.use("/Testing/Feed", Feed); 
// app.use("/Testing/share", share); 

// Spotify
app.use("/Spotify", Spotify);

// LabEntry 
app.use("/LabEntry/getData", getData);
app.use("/LabEntry/register", lapRegister);
app.use("/LabEntry/login", lapLogin);

// Kedar mini project
app.use("/Miniproject/challenges", kedarChallenges);
app.use("/Miniproject/login", kedarLogin);

// Timpass
app.use("/token",token);
app.use("/newToken",newToken);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
