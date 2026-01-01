import express from 'express';
import { getposts,createPost} from '../controllers/post.js';

const router = express.Router();

router.get('/',getposts);
router.post('/',createPost)

export default router;