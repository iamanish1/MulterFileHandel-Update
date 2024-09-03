import express from 'express';
import { testRoute } from '../controller/testController.js';
import upload from '../middlewares/uploadFile.js';


const userRoutes = express.Router() ; 

userRoutes.post('/user',upload.array('file',5), testRoute)

export default userRoutes ; 