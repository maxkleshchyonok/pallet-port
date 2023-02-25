import orderService from '../services/order-service.js';

class OrderController {
    async createOrder(request: any, response: any) {
        try {
            const order = await orderService.create(request.body);
            response.json(order);
        } catch (error) {
            console.error('Create error');
        }
    };

    async getOrder(request: any, response: any) {
        try {
            const order = await orderService.get(request.params.id);
            response.json(order);
        } catch (error) {
            console.error('Get one error');
        }
    };

    async updateOrder(request: any, response: any) {
        try {
            const order = await orderService.update(request.params.id, request.body);
            response.json(order);
        } catch (error) {
            console.error('Update error');
        }
    };

    async deleteOrder(request: any, response: any) {
        try {
            const order = await orderService.delete(request.params.id);
            response.json(order);
        } catch (error) {
            console.error('Delete error');
        }
    };

    async getByStatus(request: any, response: any) {
        try {
            const sortedOrders = await orderService.sortByStatus(request.query.status);
            response.json(sortedOrders);
        } catch (error) {
            console.error('Get sorted by status error');
        }
    };

    async getByUser(request: any, response: any) {
        try {
            const sortedOrders = await orderService.sortByUser(request.query.email);
            response.json(sortedOrders);
        } catch (error) {
            console.error('Get sorted by user error');
        }
    };
}

export default new OrderController();