import express from "express";
import upload from "express-fileupload";
import bodyParser from "body-parser";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(upload());

app.use(bodyParser.json());

app.use("/images", express.static("uploads"));

app.use("/posts", postsRoutes);

app.use("/comments", commentsRoutes);

app.get("/", (req, res) => {
  res.send("<p>/posts to see all posts</p>");
});

app.listen(PORT, () => console.log(`Port ${PORT}`));
