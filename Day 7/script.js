const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const DATA_PATH = `${__dirname}/data.json`;

function readPosts() {
  const data = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(data);
}

function writePosts(posts) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2));
}

app.get("/posts", (req, res) => {
  const posts = readPosts();
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const posts = readPosts();
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

app.post("/posts", (req, res) => {
  const posts = readPosts();
  const newPost = {
    userId: req.body.userId,
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    body: req.body.body,
  };
  posts.push(newPost);
  writePosts(posts);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  let posts = readPosts();
  const index = posts.findIndex((p) => p.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Post not found" });
  }
  posts[index] = {
    id: parseInt(req.params.id),
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
  };
  writePosts(posts);
  res.json(posts[index]);
});

app.patch("/posts/:id", (req, res) => {
  let posts = readPosts();
  const post = posts.find((p) => p.id == req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  Object.assign(post, req.body);
  writePosts(posts);
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  let posts = readPosts();
  const filtered = posts.filter((p) => p.id != req.params.id);
  if (filtered.length === posts.length) {
    return res.status(404).json({ error: "Post not found" });
  }
  writePosts(filtered);
  res.json({ message: "Post deleted" });
});

app.listen(8000, () => {
  console.log("Server running at http://127.0.0.1:8000");
});
