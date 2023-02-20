import { Router } from 'express';
import offerController from '../controllers/offer-controller.js';

const offerRouter = Router();

offerRouter.post('/offers', offerController.createOffer);
offerRouter.get('/offers/findByStatus', offerController.getOffer);
offerRouter.post('/offers/:id', offerController.updateOffer);
offerRouter.delete('/offers/:id', offerController.deleteOffer);
offerRouter.post('/offers/:id/uploadImage', offerController.createOfferImage);

export default offerRouter;
