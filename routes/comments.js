import express from "express";
import { comments } from "../data/commentsList.js";

const router = express.Router();

router.post("/", (req, res) => {
  if (!req.body.email || !req.body.content) {
    res.status(400).send("You should provide email and content");
    return;
  }

  const comment = req.body;
  comments.push({ ...comment });

  res.send(`Comment added`);
});

export default router;
