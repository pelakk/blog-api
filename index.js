import express from "express";
import upload from "express-fileupload";
import bodyParser from "body-parser";
import postsRoutes from "./routes/posts.js";
import commentsRoutes from "./routes/comments.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(upload());

app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website allowed to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://blog.dawid-matuszynski.pl/"
  );

  // Request methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  // Request headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use("/images", express.static("uploads"));

app.use("/posts", postsRoutes);

app.use("/comments", commentsRoutes);

app.get("/", (req, res) => {
  res.send("<p>/posts to see all posts</p>");
});

app.listen(PORT, () => console.log(`Port ${PORT}`));
