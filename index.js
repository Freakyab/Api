const express = require("express");
const cors = require("cors");
const mongo = require("./api/mongo");
const ProjectData = require("./api/ProjectData");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/api/mongo", mongo);
app.use("/api/ProjectData", ProjectData);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// app.listen(PORT,{} => console.log('Server started on port ${PORT}')); 