import { Router } from 'express';
import offerController from '../controllers/offer-controller.js';

const offerRouter = Router();

offerRouter.post('/offers', offerController.createOffer);
offerRouter.get('/offers/:id', offerController.getOffer);
offerRouter.post('/offers/:id', offerController.updateOffer);
offerRouter.delete('/offers/:id', offerController.deleteOffer);
offerRouter.post('/offers/:id/uploadImage', offerController.createOfferImage);
offerRouter.get('/offers/find/findByStatus', offerController.getByStatus);
offerRouter.get('/offers/find/findByUser', offerController.getByUser);


export default offerRouter;
