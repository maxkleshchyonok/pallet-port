import { Router } from 'express';
import productController from '../controllers/product-controller.js';

const productRouter = Router();

productRouter.post('/products', productController.createProduct);
productRouter.get('/products/:id', productController.getProduct);
productRouter.post('/products/:id', productController.updateProduct);
productRouter.delete('/products/:id', productController.deleteProduct);

export default productRouter;