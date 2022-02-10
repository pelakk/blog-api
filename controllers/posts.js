import { posts } from "../data/postsList.js";
import { comments } from "../data/commentsList.js";

export const getAllPosts = (req, res) => {
  res.json(res.paginatedResults);
};

// returning posts with matching id
export const getPostById = (req, res) => {
  res.send(posts.filter((post) => post.id === req.params.id));
};

// returning comments with postId matching post's id
export const getPostWithComments = (req, res) => {
  res.send(comments.filter((comment) => comment.postId === req.params.id));
};
