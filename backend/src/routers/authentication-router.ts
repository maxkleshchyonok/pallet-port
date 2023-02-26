import { Router } from 'express';
import authController from '../controllers/authentication-controller.js';

const authRouter = Router();

authRouter.post('/auth/login', authController.loginUser);
authRouter.post('/auth/logout', authController.logoutUser);
authRouter.post('/auth/register', authController.registerUser);

export default authRouter;