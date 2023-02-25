import { Router } from 'express';
import productCategoryController from '../controllers/product-сategory-controller.js';

const productCategoryRouter = Router();

productCategoryRouter.post('/productCategories', productCategoryController.createProductCategory);
productCategoryRouter.get('/productCategories/:id', productCategoryController.getProductCategory);
productCategoryRouter.post('/productCategories/:id', productCategoryController.updateProductCategory);
productCategoryRouter.delete('/productCategories/:id', productCategoryController.deleteProductCategory);

export default productCategoryRouter;