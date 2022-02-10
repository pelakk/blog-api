import express from "express";
import { comments } from "../data/commentsList.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// pass a comment to ../data/commentsList.js

router.post("/", (req, res) => {
  if (!req.body.email || !req.body.content) {
    res.status(400).send("You should provide email and content");
    return;
  }

  const comment = req.body;
  comments.push({ ...comment, id: uuidv4() });

  res.send(`Comment added`);
});

export default router;
