const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    parish: {
      type: String,
      max: 100,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 150,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UsersSchema);
