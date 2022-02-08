import express from "express";
import { getAllComments, createComment, getCommentById } from "../controllers/comments.js";
import { paginatedResults } from "../controllers/paginatedResults.js";
import { comments } from '../data/commentsList.js';

const router = express.Router();

router.get('/', paginatedResults(comments), getAllComments)

router.get('/:id', getCommentById)

router.post('/', createComment);

export default router;
