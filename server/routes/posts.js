import express from "express";
const router = express.Router();
// in node we have to write the extension EX: .js , unlike react we can write without extension 
import { getPosts, createPost } from '../controllers/posts.js'
// we use this file to handle Post http request

// to reach this we should go to localhost:5000/posts 
// as implemented in the index.js app.use('/posts', postRoutes);
router.get('/', getPosts);
router.post('/', createPost);

export default router;