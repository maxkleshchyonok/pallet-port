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
  BROKEN = 'Uszkodzone',
}

export enum DeliveryType {
  SELFPICKUP = 'Odbiór osobisty',
  BUS = 'Dostawa busem',
  TRUCK = 'Dostawa ciężarówką (TIR)',
  COURIER = 'Dostawa kurierska',
}

export enum OfferStatus {
  ACTIVE = 'Aktywna',
  MODERATION = 'Na moderacji',
  CLOSED = 'Zakończone',
}

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

export enum PaymentType {
  CASH = 'Gotówka',
  INVOICE = 'Na fakturę',
  CARD = 'Płatność kartą',
}

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

export enum EnumVAT {
  ZERO = '0',
  FULL = '23',
}

export type Enums = typeof Condition | typeof Material | typeof DeliveryType | typeof PaymentType | typeof EnumVAT;

export type EnumLowerCase = 'condition' | 'material' | 'deliveryType' | 'payment' | 'VAT';

export type DeliveryDays = {
  short: string,
  days: number,
};

export type Rating = {
  short: string,
  rank: number,
};

export type LoginData = {
  email: string,
  password: string,
};

export type RegisterData = {
  email:string,
};

export type CatalogItem = {
  short: string,
  condition: string,
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
export interface ICart {
  /**
   *
   * @type {number}
   * @memberof Cart
   */
  _id?: string;
  __v?: number;
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
  delivery: Delivery;

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
  _id: string;
  __v?: number;
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
  VAT: string;
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
  _id?: string;
  __v?: number;
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
  _id?: string;
  __v?: number;
  /**
   *
   * @type {Cart}
   * @memberof Order
   */
  cart: ICart;
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
  _id?: string;
  __v?: number;
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
  _id?: string;
  __v?: number;
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

  class?: string;
}
/**
*
* @export
* @enum {string}
*/

// export type Material = 'WOOD' | 'PLASTIC' | 'METAL' | 'CARDBOARD';
/**
*
* @export
* @interface User
*/
// type PartUser = Partial<User>;

export interface User {
  /**
   *
   * @type {number}
   * @memberof User
   */
  _id?: string;
  __v?: number;
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

  password: string;

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
  roles?: Array<string>;
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

