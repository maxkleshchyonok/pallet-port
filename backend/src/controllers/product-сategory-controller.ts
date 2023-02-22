import productCategoryService from '../services/product-сategory-service.js';

class ProductCategoryController {
    async createProductCategory(request: any, response: any) {
        const productCategory = await productCategoryService.create(request.body);
        response.json(productCategory);
    };

    async getProductCategory(request: any, response: any) {

    };

    async updateProductCategory(request: any, response: any) {

    };

    async deleteProductCategory(request: any, response: any) {

    };
}

export default new ProductCategoryController();