import express from 'express';
import { getposts } from '../controllers/post.js';

const router = express.Router();

router.get('/',getposts);

export default router;