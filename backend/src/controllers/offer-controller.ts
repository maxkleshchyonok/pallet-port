import offerService from '../services/offer-service.js';

class OfferController {
    async createOffer(request: any, response: any) {
        try {
            const offer = await offerService.create(request.body);
            response.json(offer);
        } catch (error) {
            console.error('Create error');
        }
    };

    async getOffer(request: any, response: any) {
        try {
            const order = await offerService.get(request.params.id);
            response.json(order);
        } catch (error) {
            console.error('Get one error');
        }
    };

    async updateOffer(request: any, response: any) {
        try {
            const offer = await offerService.update(request.params.id, request.body);
            response.json(offer);
        } catch (error) {
            console.error('Create error');
        }
    };

    async deleteOffer(request: any, response: any) {
        try {
            const offer = await offerService.delete(request.params.id);
            response.json(offer);
        } catch (error) {
            console.error('Create error');
        }
    };

    async createOfferImage(request: any, response: any) {
        try {
            console.log(request.params.id);
            response.json('OK');
        } catch (error) {
            console.error('Create error');
        }
    };

    async getByStatus(request: any, response: any) {
        try {
            const sortedOrders = await offerService.sortByStatus(request.query.status);
            response.json(sortedOrders);
        } catch (error) {
            console.error('Get sorted by status error');
        }
    };

    async getByUser(request: any, response: any) {
        try {
            const sortedOrders = await offerService.sortByUser(request.query.email);
            response.json(sortedOrders);
        } catch (error) {
            console.error('Get sorted by user error');
        }
    };
}

export default new OfferController();