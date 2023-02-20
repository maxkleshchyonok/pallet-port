import { Router } from 'express';
import userController from '../controllers/user-controller.js';

const userRouter = Router();

userRouter.get('/users/', userController.getUser);
userRouter.post('/users', userController.createUser);
userRouter.post('/users/login', userController.loginUser);
userRouter.post('/users/logout', userController.logoutUser);
userRouter.post('/users/register', userController.registerUser);
userRouter.get('/users/:userEmail', userController.getOneUser);
userRouter.post('/users/:userEmail', userController.updateUser);
userRouter.delete('/users/:userEmail', userController.deleteUser);

export default userRouter;
