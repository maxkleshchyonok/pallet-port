export enum SortEnum {
  DEFAULT = 'Wybrane',
  NAME = 'Udźwig rosnąco',
  NAME_REVERSED = 'Udźwig malejąco',
  PRICE_UP = 'Najtańsze',
  PRICE_DOWN = 'Najdroższe',
}

export enum Condition {
  NEW = 'Nowe',
  USED1 = 'Używane 1 gatunku',
  USED2 = 'Używane 2 gatunku',
  USED3 = 'Używane 3 gatunku',
  BROKEN = 'BROKEN',
}

export type DeliveryDays = {
  short: string,
  days: number,
};

export type Rating = {
  short: string,
  rank: number,
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
  street: string;
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
  id: number;
  /**
   *
   * @type {User}
   * @memberof Cart
   */
  user: User;
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
  offer: IOffer;
  /**
   *
   * @type {number}
   * @memberof CartOffers
   */
  quantity: number;
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
  id: number;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  NIP: string;
  /**
   *
   * @type {Address}
   * @memberof Company
   */
  address: Address;

  IBAN: string;

  paymentDate: number;
  /**
   *
   * @type {number}
   * @memberof Company
   */
  VAT: number;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  phone: string;
  /**
   *
   * @type {Array<number>}
   * @memberof Company
   */
  workingHourMin: number;

  workingHourMax: number;
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
  deliveryType: string;
  /**
   *
   * @type {Array<number>}
   * @memberof Delivery
   */
  deliveryTimeMin: number;

  deliveryTimeMax: number;
  /**
   *
   * @type {number}
   * @memberof Delivery
   */
  deliveryPrice: number;
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
export interface IOffer {
  /**
   *
   * @type {number}
   * @memberof Offer
   */
  id: number;
  /**
   *
   * @type {Product}
   * @memberof Offer
   */
  product: IProduct;
  /**
   *
   * @type {User}
   * @memberof Offer
   */
  seller: User;

  company: Company;
  /**
   *
   * @type {number}
   * @memberof Offer
   */
  price: number;


  /**
   *
   * @type {Array<number>}
   * @memberof Offer
   */
  quantityMin: number;

  quantityMax: number;
  /**
   *
   * @type {Array<Delivery>}
   * @memberof Offer
   */
  delivery: Array<Delivery>;
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
  offerStatus: string;
  /**
   *
   * @type {number}
   * @memberof Offer
   */
  rating: number;
  /**
   *
   * @type {boolean}
   * @memberof Offer
   */
  isTop: boolean;
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
  id: number;
  /**
   *
   * @type {Cart}
   * @memberof Order
   */
  cart: Cart;
  /**
   *
   * @type {OrderStatus}
   * @memberof Order
   */
  status: OrderStatus;
  /**
   *
   * @type {PaymentType}
   * @memberof Order
   */
  payment: PaymentType;
  /**
   *
   * @type {boolean}
   * @memberof Order
   */
  paymentStatus: boolean;
}
/**
*
* @export
* @enum {string}
*/
export enum OrderStatus {
  CREATED = 'Utworzone',
  MODERATION = 'Moderacja',
  PENDING = 'Oczekujące',
  ACCEPTED = 'Przyjęte',
  SENDED = 'Wyslane',
  DELIVERED = 'Dostarczone',
  RETURNED = 'Zwrócone',
  CLOSED = 'Zamknięte',
}
/**
*
* @export
* @enum {string}
*/
export enum PaymentType {
  CASH = 'Gotówka',
  INVOICE = 'Na fakturę',
  CARD = 'Płatność kartą',
}
/**
*
* @export
* @interface Product
*/
export interface IProduct {
  /**
   *
   * @type {number}
   * @memberof Product
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  material: string;

  condition: string;

  description: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  image1: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  image2: string;
  /**
   *
   * @type {string}
   * @memberof Product
   */
  shortName: string;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  length: number;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  width: number;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  height: number;
  /**
   *
   * @type {number}
   * @memberof Product
   */
  maxLoad: number;
  /**
   *
   * @type {ProductCategory}
   * @memberof Product
   */
  category: IProductCategory;
}
/**
*
* @export
* @interface ProductCategory
*/
export interface IProductCategory {
  /**
   *
   * @type {number}
   * @memberof ProductCategory
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  image: string;
  /**
   *
   * @type {string}
   * @memberof ProductCategory
   */
  shortName: string;
}
/**
*
* @export
* @enum {string}
*/
export enum Role {
  BUYER = 'Kupujący',
  SELLER = 'Sprzedający',
  ADMIN = 'ADMIN',
  SYSTEM = 'SYSTEM',
  LOGISTIC = 'Kurier',
}

export enum Material {
  WOOD = 'Drewno',
  PLASTIC = 'Plastik',
  METAL = 'Metal',
  CARDBOARD = 'Tektura',
}

// export type Material = 'WOOD' | 'PLASTIC' | 'METAL' | 'CARDBOARD';
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
  id: number;
  /**
   *
   * @type {string}
   * @memberof User
   */
  name: string;
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
  rank: number;
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
  roles: Array<string>;
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

