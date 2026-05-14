import express from 'express';
import {create,getTweet} from '../../controllers/tweetcontroller.js'
import {toggleLike} from '../../controllers/likecontroller.js'
import {createcomment} from '../../controllers/comment-controller.js'
import {signUp,login} from '../../controllers/usercontroller.js'
import {authenticate} from '../../middleware/authenticate.js'
const router=express.Router();
router.post('/tweets',authenticate,create);
router.post('/likes/toggle',toggleLike);
router.post('/comment/create',createcomment);
router.get('/tweets/:id',getTweet)
router.post('/signup',signUp);
router.post('/login',login)
export default router