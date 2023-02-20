import { Router } from 'express';
import orderController from '../controllers/order-controller.js';

const orderRouter = Router();

orderRouter.post('/orders', orderController.createOrder);
orderRouter.get('/orders/:id', orderController.getOrder);
orderRouter.post('/orders/:id', orderController.updateOrder);
orderRouter.delete('/orders/:id', orderController.deleteOrder);
orderRouter.get('/orders/findByStatus', orderController.getSortedOrders);

export default orderRouter;
