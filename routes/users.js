const Users = require("../models/Users");
const bcrypt = require("bcryptjs");

const router = require("express").Router();

// user resgister
router.post("/signup", async (req, res) => {
  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new Users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    !user && res.status(404).json("🔴 User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("🔴 Wrong Password");

    await res.status(200).json(user);
  } catch (err) {
    await res.status(500).json(err);
  }
});
router.put("/:id/update", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/:id/delete", async (req, res) => {
  try {
      await Users.findByIdAndDelete(req.params.id);
      res.status(200).json("🟢 Account Deleted succesfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
});

module.exports = router;
