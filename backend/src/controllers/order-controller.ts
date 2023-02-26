import orderService from '../services/order-service.js';
import formatError from '../tools/errorFormatter.js';

class OrderController {
    async createOrder(request: any, response: any) {
        try {
            const order = await orderService.create(request.body);
            response.json(order);
        } catch (error: any) {
            console.error('Create error');
            response.json(formatError(error));
        }
    };

    async getOrder(request: any, response: any) {
        try {
            const order = await orderService.get(request.params.id);
            response.json(order);
        } catch (error: any) {
            console.error('Get one error');
            response.json(formatError(error));
        }
    };

    async updateOrder(request: any, response: any) {
        try {
            const order = await orderService.update(request.params.id, request.body);
            response.json(order);
        } catch (error: any) {
            console.error('Update error');
            response.json(formatError(error));
        }
    };

    async deleteOrder(request: any, response: any) {
        try {
            const order = await orderService.delete(request.params.id);
            response.json(order);
        } catch (error: any) {
            console.error('Delete error');
            response.json(formatError(error));
        }
    };

    async getByStatus(request: any, response: any) {
        try {
            const sortedOrders = await orderService.sortByStatus(request.query.status);
            response.json(sortedOrders);
        } catch (error: any) {
            console.error('Get sorted by status error');
            response.json(formatError(error));
        }
    };

    async getByUser(request: any, response: any) {
        try {
            const sortedOrders = await orderService.sortByUser(request.query.email);
            response.json(sortedOrders);
        } catch (error: any) {
            console.error('Get sorted by user error');
            response.json(formatError(error));
        }
    };
}

export default new OrderController();