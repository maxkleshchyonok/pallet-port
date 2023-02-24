import productCategoryService from '../services/product-сategory-service.js';

class ProductCategoryController {
    async createProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.create(request.body);
            response.json(productCategory);
        } catch (error) {
            console.error('Create error');
        }
    };

    async getProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.get(request.params.id);
            response.json(productCategory);
        } catch (error) {
            console.error('Get error');
        }
    };

    async updateProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.update(request.params.id, request.body);
            response.json(productCategory);
        } catch (error) {
            console.error('Update error');
        }
    };

    async deleteProductCategory(request: any, response: any) {
        try {
            const productCategory = await productCategoryService.delete(request.params.id);
            response.json(productCategory);
        } catch (error) {
            console.error('Delete error');
        }
    };
}

export default new ProductCategoryController();