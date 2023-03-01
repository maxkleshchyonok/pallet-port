import { Order } from '../../types/types';

export default class MyOrder implements Order {
  constructor(
    //public id: Order['_id'],
    public cart: Order['cart'],
    public status: Order['status'],
    public payment: Order['payment'],
    public paymentStatus: Order['paymentStatus'],
  ) {
  }
}
