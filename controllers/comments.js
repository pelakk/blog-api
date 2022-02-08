import { v4 as uuidv4 } from 'uuid';
import { comments } from '../data/commentsList.js';

export const getAllComments = (req, res) => {
    res.json(res.paginatedResults);
}

export const createComment = (req, res) => {
    if(!req.body.email || !req.body.content){
        res.status(400).send('You should provide email and content');
        return
    }

    const comment = req.body;
    comments.push(comment);

    res.send(`comment added`);
}

export const getCommentById = (req, res) => {
    res.send(comments.filter(
        comment => ( comment.id === req.params.id)
    ))
}
