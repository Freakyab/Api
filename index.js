const express = require("express");
const cors = require("cors");
const mongo = require("./api/mongo");
const ProjectData = require("./api/ProjectData");

// LinkedinCopy
const login = require("./Linkedin/login");
const upload = require("./Linkedin/upload");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/api/mongo", mongo);
app.use("/api/ProjectData", ProjectData);

// LinkedinCopy
app.use("/Linkedin/login", login);
app.use("/linkedin/link", upload);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
