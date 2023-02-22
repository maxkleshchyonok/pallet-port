import productService from '../services/product-service.js';

class ProductController {
    async createProduct(request: any, response: any) {
        const product = await productService.create(request.body);
        response.json(product);
    };

    async getProduct(request: any, response: any) {

    };

    async updateProduct(request: any, response: any) {

    };

    async deleteProduct(request: any, response: any) {

    };
}

export default new ProductController();