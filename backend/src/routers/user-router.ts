import { Router } from 'express';
import userController from '../controllers/user-controller.js';

const userRouter = Router();

userRouter.get('/users', userController.getUsers);
userRouter.post('/users', userController.createUser);
userRouter.get('/users/:id', userController.getUser);
userRouter.post('/users/:id', userController.updateUser);
userRouter.delete('/users/:id', userController.deleteUser);
// userRouter.delete('/users/:userEmail', userController.deleteUser);

export default userRouter;
