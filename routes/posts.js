import express from "express";
import { getAllPosts, getPostById, getPostWithComments } from "../controllers/posts.js";
import { paginatedResults } from "../controllers/paginatedResults.js";
import { posts } from '../data/postsList.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', paginatedResults(posts), getAllPosts);

router.get('/:id/comments', getPostWithComments);

router.get('/:id', getPostById);

router.post('/', (req, res) => {
    if(!req.body.title || !req.body.content){
        res.status(400).send('You should provide title and content');
        return
    }

    const file = req.files.image;
    const filename = file.name;
    const filepath = './uploads/'+filename;
    file.mv(filepath)

    const post = req.body;
    posts.push({ ...post, path: `./images/${filename}` ,id: uuidv4() });

    res.send(`Post added`);
});

export default router;
