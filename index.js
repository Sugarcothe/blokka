const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require('helmet')
const morgan = require('morgan')
const UsersRoute = require("./routes/users");
const PostRoute = require('./routes/posts')

dotenv.config();
const app = express();
app.use(helmet());
app.use(morgan("common"));

app.use(express.json());
app.use("/api/users", UsersRoute);
app.use("/api/posts", PostRoute);

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log(`🔴 BACKEND IS NOT CONNECTED ${err}`);
  } else {
    console.log(`🟢 CONNECTED TO MONGO DATABASE`);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🟢 Server listening on port ${process.env.PORT}`);
});
