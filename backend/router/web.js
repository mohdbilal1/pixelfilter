import express from "express";
import {loginController,registController,createUserDoc,readUserDoc} from '../controllers/userController.js';
const router =express.Router();

router.get('/regist',registController);
router.post('/regist',createUserDoc);
router.get('/',loginController);
router.post('/',readUserDoc);

export default router;