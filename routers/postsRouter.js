const express = require("express");
const router = express.Router();

const posts = require("../posts");

// INDEX

router.get("/posts", (req, res) => {
  res.json(posts);
  console.log("Lettura dei post");
});

// SHOW

router.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentPost = posts.filter((post) => post.id == id);
  res.json(currentPost);
  console.log("Lettura del post " + id);
});

module.exports = router;
