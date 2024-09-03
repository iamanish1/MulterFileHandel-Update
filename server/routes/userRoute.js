import express from 'express';
import { testRoute } from '../controller/testController.js';

const userRoutes = express.Router() ; 

userRoutes.post('/user' , testRoute)

export default userRoutes ; 