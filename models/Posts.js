const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    header: {
      type: String,
      require: true,
      min: 3,
      max: 2000,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      min: 20,
      max: 10000,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    balance: {
      type: Number,
      default: 0.0,
    },
    accountNumber: {
      type: String,
      unique: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: true,
      default: 0.0,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
