const mongoose = require("mongoose");
const client = require("../config/ventureMatchConnect.js");

const entrepreneurSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      // required : true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);

const Entrepreneur = client.model("Entrepreneur", entrepreneurSchema);
