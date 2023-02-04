import { SortEnum, Offer  } from '../types/types';
import offerJSON from '../../assets/json/Offer.json';
// import { Delivery, DeliveryType } from '../types/types';

const offersArr: Array<Offer> = new Array(20).fill(offerJSON);
const categorySet: Set<string> = new Set(offersArr.map(offer => offer.product.category.shortName));
const shortNameSet: Set<string> = new Set(offersArr.map(offer => offer.product.shortName));
// const sellerRankSet: Set<number> = new Set(offersArr.map(offer => offer.seller.rank));
// const offerRatingSet: Set<number> = new Set(offersArr.map(offer => offer.rating));
// const deliverySet: Set<Array<Delivery>> = new Set(offersArr.map(offer => offer.delivery));
// const deliveryTypeArr = () => {
//   const res = new Array<DeliveryType>;
//   deliverySet.forEach(delivery => delivery.map(x => {
//     res.push(x.deliveryType);
//   }));
//   return res;
// };

const states = [
  'mazowieckie',
  'dolnośląskie',
  'kujawsko-pomorskie',
  'lubelskie',
  'lubuskie',
  'łódzkie',
  'małopolskie',
  'opolskie',
  'podkarpackie',
  'podlaskie',
  'pomorskie',
  'śląskie',
  'świętokrzyskie',
  'warmińsko-mazurskie',
  'wielkopolskie',
  'zachodniopomorskie',
];

export const INITIAL_STATE = {
  category: categorySet,
  short: shortNameSet,
  price: [0, 500] as [number, number],
  condition: ['used', 'new'],
  quantity: [0, 100000],
  material: ['WOOD', 'PLASTIC', 'CARDBOARD', 'METAL'],
  length: [0, 3000],
  width: [0, 3000],
  height: [0, 3000],
  load: [0, 5000],
  sort: SortEnum.DEFAULT,
  sellerRank: [0, 5],
  offerRating: [0, 5],
  deliveryType: ['SELFPICKUP', 'BUS', 'TRACK', 'COURIER'],
  days: [0, 100],
  state: states,
  VAT: [0, 23],
  payment: ['CASH', 'INVOICE', 'CARD'],
};

const hash = window.location.hash.slice(1);

export let parameters = new URLSearchParams(hash.includes('?') ? hash.slice(hash.indexOf('?') + 1) : '');

export function saveParameters() {
  localStorage.setItem('parameters', parameters.toString());
}

export function saveParametersBeforeProductPage() {
  localStorage.setItem('parameters2', parameters.toString());
}


export function loadParameters() {
  const tempPar = localStorage.getItem('parameters') as string;
  if (tempPar) {
    const tempParams = new URLSearchParams(tempPar);
    parameters = tempParams;
  }
}

export function loadParametersAfterPP() {
  const tempPar = localStorage.getItem('parameters2') as string;
  setTimeout(() => {
    if (tempPar) {
      const tempParams = new URLSearchParams(tempPar);
      parameters = tempParams;
    }
  }, 100);
}


// clear?: string
export const parametersObj = () => {

  // let category: string[] = [],
  //   quantity: number[] = [],
  //   condition: string[] = [],
  //   material: string[] = [],
  //   length: number[] = [],
  //   price: number[] = [],
  //   width: number[] = [],
  //   height: number[] = [],
  //   load: number[] = [],
  //   sort = '',
  //   short: string[] = [];
  const category = INITIAL_STATE.category,
    short = INITIAL_STATE.short,
    price = INITIAL_STATE.price,
    condition = INITIAL_STATE.condition,
    quantity = INITIAL_STATE.quantity,
    material = INITIAL_STATE.material,
    length = INITIAL_STATE.length,
    width = INITIAL_STATE.width,
    height = INITIAL_STATE.height,
    load = INITIAL_STATE.load,
    sort = INITIAL_STATE.sort,
    sellerRank = INITIAL_STATE.sellerRank,
    offerRating = INITIAL_STATE.offerRating,
    deliveryType = INITIAL_STATE.deliveryType,
    days = INITIAL_STATE.days,
    state = INITIAL_STATE.state,
    VAT = INITIAL_STATE.VAT,
    payment = INITIAL_STATE.payment;

  //   const setSlider = (name: string) => {
  //     const sliderStr = parameters.getAll(`${name}`).join('-').split('-');
  //     const slider = [parseInt(sliderStr[0]), parseInt(sliderStr[1])];
  //     return slider;
  //   };

  //   if (!clear) {
  //     price = setSlider('price');
  //     width = setSlider('width');
  //     length = setSlider('length');
  //     height = setSlider('height');
  //     load = setSlider('load');
  //     category = parameters.getAll('category').join().split(',');
  //     const quantityStr = parameters.getAll('quantity').join('').split('-');
  //     quantity = [parseInt(quantityStr[0]), parseInt(quantityStr[1])];
  //     condition = parameters.getAll('condition').join().split(', ');
  //     material = parameters.getAll('material').join().split(',');
  //     sort = parameters.get('sort') as string;
  //     short = parameters.getAll('short').join().split(',');

  //   } else if (clear === 'clear') {
  //     parameters.set('category', INITIAL_STATE.category.join(','));
  //     parameters.set('price', INITIAL_STATE.price.join('-'));
  //     parameters.set('quantity', INITIAL_STATE.quantity.join('-'));
  //     parameters.set('condition', INITIAL_STATE.condition.join(', '));
  //     parameters.set('material', INITIAL_STATE.material.join(','));
  //     parameters.set('length', INITIAL_STATE.length.join('-'));
  //     parameters.set('width', INITIAL_STATE.width.join('-'));
  //     parameters.set('height', INITIAL_STATE.height.join('-'));
  //     parameters.set('load', INITIAL_STATE.load.join('-'));
  //     parameters.set('short', INITIAL_STATE.short.join(','));
  //     parameters.set('sort', INITIAL_STATE.sort);

  //     category = INITIAL_STATE.category;
  //     price = INITIAL_STATE.price;
  //     quantity = INITIAL_STATE.quantity;
  //     condition = INITIAL_STATE.condition;
  //     material = INITIAL_STATE.material;
  //     length = INITIAL_STATE.length;
  //     width = INITIAL_STATE.width;
  //     height = INITIAL_STATE.height;
  //     load = INITIAL_STATE.load;
  //     sort = INITIAL_STATE.sort;
  //     short = INITIAL_STATE.short;

  //     window.location.hash = 'catalog-page';

  //   } else if (INITIAL_STATE.short.includes(clear)) {

  //     saveParametersBeforeProductPage();

  //     // const productsArr = Array.from(productsJSON);
  //     const product = productsArr.filter(x => x.short === clear);

  //     parameters.set('category', product[0].category);
  //     parameters.set('price', `${product[0].price.toString()}-${product[0].price.toString()}`);
  //     parameters.set('quantity', '0-100000');
  //     parameters.set('condition', product[0].condition);
  //     parameters.set('material', product[0].material);
  //     parameters.set('length', `${product[0].length.toString()}-${product[0].length.toString()}`);
  //     parameters.set('width', `${product[0].width.toString()}-${product[0].width.toString()}`);
  //     parameters.set('height', `${product[0].height.toString()}-${product[0].height.toString()}`);
  //     parameters.set('load', `${product[0].load.toString()}-${product[0].load.toString()}`);
  //     parameters.set('short', `${product[0].short}`);

  //     price = setSlider('price');
  //     width = setSlider('width');
  //     length = setSlider('length');
  //     height = setSlider('height');
  //     load = setSlider('load');
  //     category = product[0].category.split('');
  //     quantity = INITIAL_STATE.quantity;
  //     condition = product[0].condition.split('');
  //     material = product[0].material.split('');
  //     sort = INITIAL_STATE.sort;
  //     short = [product[0].short];

  //     loadParametersAfterPP();

  //     // saveParameters();
  //     // loadParameters();
  //     // window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';

  //     // window.location.hash = `${short}`;
  //   }

  return  {
    category: category,
    short: short,
    price: price,
    condition: condition,
    quantity: quantity,
    material: material,
    length: length,
    width: width,
    height: height,
    load: load,
    sort: sort,
    sellerRank: sellerRank,
    offerRating: offerRating,
    deliveryType: deliveryType,
    days: days,
    state: state,
    VAT: VAT,
    payment: payment,
  };
};

