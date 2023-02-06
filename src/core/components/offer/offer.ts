import Product from '../product/product';
import { IOffer, IProduct } from '../../types/types';

export default class Offer extends Product {
  constructor(
    public id: IProduct['id'],
    public name: IProduct['name'],
    public material: IProduct['material'],
    public condition: IProduct['condition'],
    public description: IProduct['description'],
    public image1: IProduct['image1'],
    public image2: IProduct['image2'],
    public shortName: IProduct['shortName'],
    public length: IProduct['length'],
    public width: IProduct['width'],
    public height: IProduct['height'],
    public maxLoad: IProduct['maxLoad'],
    public category: IProduct['category'],
    public price: IOffer['price'],
  ) {
    super(id, name, material, condition, description, image1, image2,
      shortName, length, width, height, maxLoad, category,
    );
    this.price = price;
  }
}
