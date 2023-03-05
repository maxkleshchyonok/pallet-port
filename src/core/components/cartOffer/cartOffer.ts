import { CartOffers } from '../../types/types';

export default class CartOffer implements CartOffers {
  constructor(
    // public _id: ICart['_id'],
    // public __v: IProduct['__v'],
    public offer: CartOffers['offer'],
    public delivery: CartOffers['delivery'],
    public quantity: CartOffers['quantity'],
  ) {}
}
