import { Router } from 'express';
import userController from '../controllers/user-controller.js';
import checkAuth from '../middlewares/authMiddleware.js';

const userRouter = Router();

userRouter.get('/users', userController.getUsers);
userRouter.post('/users', checkAuth, userController.createUser);
userRouter.get('/users/:id', userController.getUser);
userRouter.post('/users/:id', userController.updateUser);
userRouter.delete('/users/:id', checkAuth, userController.deleteUser);
// userRouter.delete('/users/:userEmail', userController.deleteUser);

export default userRouter;
