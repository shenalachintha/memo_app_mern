import express from 'express';
import { getposts,createPost,updatePost,deletePost,likePost} from '../controllers/post.js';

const router = express.Router();

router.get('/',getposts);
router.post('/',createPost)
router.patch('/:id',updatePost );
router.delete('/:id',deletePost );
router.patch('/:id',likePost);

export default router;