import express from 'express';
import {create} from '../../controllers/tweetcontroller.js'
import {toggleLike} from '../../controllers/likecontroller.js'
const router=express.Router();
router.post('/tweets',create);
router.post('/likes/toggle',toggleLike);
export default router