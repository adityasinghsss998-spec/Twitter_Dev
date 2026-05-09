import express from 'express';
import {create} from '../../controllers/tweetcontroller.js'
const router=express.Router();
router.post('/tweets',create);
export default router