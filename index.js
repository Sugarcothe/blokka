const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log(`🔴 BACKEND IS NOT CONNECTED ${err}`);
  } else {
    console.log(`🟢 CONNECTED TO MONGODB`);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🟢 Server listening on port ${process.env.PORT}`);
});
