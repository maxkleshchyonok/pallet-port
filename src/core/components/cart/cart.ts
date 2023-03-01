import { ICart } from '../../types/types';

export default class Cart implements ICart {
  constructor(
    // public _id: ICart['_id'],
    // public __v: IProduct['__v'],
    public user: ICart['user'],
    public offers: ICart['offers'],
  ) {}
}
