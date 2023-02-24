import productService from '../services/product-service.js';

class ProductController {
    async createProduct(request: any, response: any) {
        try {
            const product = await productService.create(request.body);
            response.json(product);
        } catch (error) {
            console.error('Create error');
        }
    };

    async getProduct(request: any, response: any) {
        try {
            const product = await productService.get(request.params.id);
            response.json(product);
        } catch (error) {
            console.error('Get error');
        }
    };

    async updateProduct(request: any, response: any) {
        try {
            const product = await productService.update(request.params.id, request.body);
            response.json(product);
        } catch (error) {
            console.error('Update error');
        }
    };

    async deleteProduct(request: any, response: any) {
        try {
            const product = await productService.delete(request.params.id);
            response.json(product);
        } catch (error) {
            console.error('Delete error');
        }
    };
}

export default new ProductController();