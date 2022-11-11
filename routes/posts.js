const router = require("express").Router();
const Post = require("../models/Posts");

router.post("/createpost", async (req, res) => {
  const post = await new Post(req.params.id);
  try {
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.send(400).json("make sure you have permission");
  }
});

module.exports = router;
