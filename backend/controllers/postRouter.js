const postRouter = require("express").Router();
const { Post } = require("../models");

postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

postRouter.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).end();
  }
});

postRouter.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.json(post);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

postRouter.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    newNote = req.body();
    res.json(newNote);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

postRouter.delete(":/id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    await post.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = postRouter;
