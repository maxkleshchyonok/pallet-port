export type ProductType = {
  id: number;
  short: string;
  name: string;
  category: string;
  condition: string;
  material: string;
  length: number;
  width: number;
  height: number;
  load: number;
  image1: string;
  image2: string;
  info: string;
  price: number;
  quantity: number;
};

export enum SortEnum {
  DEFAULT = 'Wybrane',
  NAME = 'Udźwig rosnąco',
  NAME_REVERSED = 'Udźwig malejąco ',
  PRICE_UP = 'Najtańsze',
  PRICE_DOWN = 'Najdroższe',
}

export interface IFilters {
  price: [number, number];
  // stock: boolean;
  category: string[];
  // material: string[];
  // length: [number, number] | [];
  // width: [number, number] | [];
  // height: [number, number] | [];
  // load: [number, number] | [];
  // sort: SortEnum;
  // quantity: number;
}

export const INITIAL_STATE = {
  price: [0, 500] as [number, number],
  category: ['palety_euro', 'palety_europodobne', 'palety_jedno',
    'palety_przem', 'polpalety', 'palety_tektur', 'palety_plastik', 'nadstawki'],
  condition: ['used', 'new'],
  quantity: [0, 100000],
  material: ['drewno', 'plastik', 'tektura'],
  length: [0, 3000],
  width: [0, 3000],
  height: [0, 3000],
  load: [0, 5000],
  sort: SortEnum.DEFAULT,
  short: ['euro_new', 'euro_used_1', 'euro_used_2', 'euro_used_3',
    'europod_new', 'europod_used', 'jedno_new_1', 'jedno_new_2',
    'jedno_used_1', 'jedno_used_2', 'jedno_used_3', 'przem_1', 'przem_2',
    'polpal_1', 'polpal_2', 'plastik_1', 'plastik_2', 'tektur_1',
    'nadstawka_1', 'nadstawka_2', 'nadstawka_3'],
};

/**
 *
 * @export
 * @interface Address
 */
export interface Address {
  /**
   *
   * @type {string}
   * @memberof Address
   */
  street?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  city: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  zipCode: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  state: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  countryCode: string;
  /**
   *
   * @type {Coordinates}
   * @memberof Address
   */
  coordinates?: Coordinates;
}
/**
*
* @export
* @interface Cart
*/
export interface Cart {
  /**
   *
   * @type {number}
   * @memberof Cart
   */
  id?: number;
  /**
   *
   * @type {User}
   * @memberof Cart
   */
  user?: User;
  /**
   *
   * @type {Array<CartOffers>}
   * @memberof Cart
   */
  offers?: Array<CartOffers>;
}
/**
*
* @export
* @interface CartOffers
*/
export interface CartOffers {
  /**
   *
   * @type {Offer}
   * @memberof CartOffers
   */
  offer?: Offer;
  /**
   *
   * @type {number}
   * @memberof CartOffers
   */
  quantity?: number;
}
/**
*
* @export
* @interface Company
*/
export interface Company {
  /**
   *
   * @type {number}
   * @memberof Company
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  NIP?: string;
  /**
   *
   * @type {Address}
   * @memberof Company
   */
  address?: Address;
  /**
   *
   * @type {number}
   * @memberof Company
   */
  VAT?: number;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  phone?: string;
  /**
   *
   * @type {Array<number>}
   * @memberof Company
   */
  workingHours?: Array<number>;
}
/**
*
* @export
* @interface Coordinates
*/
export interface Coordinates {
  /**
   *
   * @type {number}
   * @memberof Coordinates
   */
  lat: number;
  /**
   *
   * @type {number}
   * @memberof Coordinates
   */
  lon: number;
}
/**
*
* @export
* @interface Delivery
*/
export interface Delivery {
  /**
   *
   * @type {DeliveryType}
   * @memberof Delivery
   */
  deliveryType?: DeliveryType;
  /**
   *
   * @type {Array<number>}
   * @memberof Delivery
   */
  deliveryTime?: Array<number>;
  /**
   *
   * @type {number}
   * @memberof Delivery
   */
  deliveryPrice?: number;
}
/**
*
* @export
* @enum {string}
*/
export enum DeliveryType {
  SELFPICKUP = 'SELFPICKUP',
  BUS = 'BUS',
  TRUCK = 'TRUCK',
  COURIER = 'COURIER',
}
/**
*
* @export
* @interface Offer
*/
export interface Offer {
  /**
   *
   * @type {number}
   * @memberof Offer
   */
  id?: number;
  /**
   *
   * @type {Product}
   * @memberof Offer
   */
  product?: Product;
  /**
   *
   * @type {User}
   * @memberof Offer
   */
  seller?: User;
  /**
   *
   * @type {number}
   * @memberof Offer
   */
  price?: number;
  /**
   *
   * @type {Array<number>}
   * @memberof Offer
   */
  quantity?: Array<number>;
  /**
   *
   * @type {Array<Delivery>}
   * @memberof Offer
   */
  delivery?: Array<Delivery>;
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  image1?: string;
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  image2?: string;
  /**
   *
   * @type {string}
   * @memberof Offer
   */
  description?: string;
  /**
   *
   * @type {OfferStatus}
   * @memberof Offer
   */
  offerStatus?: OfferStatus;
  /**
   *
   * @type {number}
   * @memberof Offer
   */
  rating?: number;
  /**
   *
   * @type {boolean}
   * @memberof Offer
   */
  isTop?: boolean;
}
/**
*
* @export
* @enum {string}
*/
export enum OfferStatus {
  ACTIVE = 'ACTIVE',
  MODERATION = 'MODERATION',
  CLOSED = 'CLOSED',
}
/**
*
* @export
* @interface Order
*/
export interface Order {
  /**
   *
   * @type {number}
   * @memberof Order
   */
  id?: number;
  /**
   *
   * @type {Cart}
   * @memberof Order
   */
  cart?: Cart;
  /**
   *
   * @type {OrderStatus}
   * @memberof Order
   */
  status?: OrderStatus;
  /**
   *
   * @type {PaymentType}
   * @memberof Order
   */
  payment?: PaymentType;
  /**
   *
   * @type {boolean}
   * @memberof Order
   */
  paymentStatus?: boolean;
}
/**
*
* @export
* @enum {string}
*/
export enum OrderStatus {
  CREATED = 'CREATED',
  MODERATION = 'MODERATION',
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  SENDED = 'SENDED',
  DELIVERED = 'DELIVERED',
  RETURNED = 'RETURNED',
  CLOSED = 'CLOSED',
}
/**
*
* @export
* @enum {string}
*/
export enum PaymentType {
  CASH = 'CASH',
  INVOICE = 'INVOICE',
  CARD = 'CARD',
}
/**
*
* @export
* @interface Product
*/
export interface Product {
  /**
   *
   * @type {number}
   * @memberof Product
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  image1?: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  image2?: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  shortName?: string;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  length?: number;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  width?: number;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  height?: number;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  maxLoad?: number;
  /**
   *
   * @type {ProductCategory}
   * @memberof Product
   */
  category?: ProductCategory;
}
/**
*
* @export
* @interface ProductCategory
*/
export interface ProductCategory {
  /**
   *
   * @type {number}
   * @memberof ProductCategory
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  image?: string;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  shortName?: string;
}
/**
*
* @export
* @enum {string}
*/
export enum Role {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
  SYSTEM = 'SYSTEM',
  LOGISTIC = 'LOGISTIC',
}
/**
*
* @export
* @interface User
*/
export interface User {
  /**
   *
   * @type {number}
   * @memberof User
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof User
   */
  name?: string;
  /**
   * unique
   * @type {string}
   * @memberof User
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  phone?: string;
  /**
   *
   * @type {number}
   * @memberof User
   */
  rank?: number;
  /**
   *
   * @type {string}
   * @memberof User
   */
  avatar?: string;
  /**
   *
   * @type {Array<Role>}
   * @memberof User
   */
  roles?: Array<Role>;
  /**
   *
   * @type {Address}
   * @memberof User
   */
  deliveryAddress?: Address;
  /**
   *
   * @type {Address}
   * @memberof User
   */
  paymentAddress?: Address;
  /**
   *
   * @type {Array<Company>}
   * @memberof User
   */
  companies?: Array<Company>;
}
