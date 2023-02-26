import productCategoryService from '../services/product-сategory-service.js';
import formatError from '../tools/errorFormatter.js';

class ProductCategoryController {
    async createProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.create(request.body);
            response.json(productCategory);
        } catch (error: any) {
            console.error('Create error');
            response.json(formatError(error));
        }
    };

    async getProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.get(request.params.id);
            response.json(productCategory);
        } catch (error: any) {
            console.error('Get error');
            response.json(formatError(error));
        }
    };

    async updateProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.update(request.params.id, request.body);
            response.json(productCategory);
        } catch (error: any) {
            console.error('Update error');
            response.json(formatError(error));
        }
    };

    async deleteProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.delete(request.params.id);
            response.json(productCategory);
        } catch (error: any) {
            console.error('Delete error');
            response.json(formatError(error));
        }
    };
}

export default new ProductCategoryController();