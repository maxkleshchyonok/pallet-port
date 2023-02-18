import { SortEnum } from '../types/types';
// import offerJSON from '../../assets/json/Offer.json';
import offersArrJSON from '../../assets/json/_OffersArray.json' ;
import { Condition, DeliveryType, Material, IOffer, PaymentType, EnumVAT } from '../types/types';

const offersArr: Array<IOffer> = Array.from(offersArrJSON);
const categorySet: Set<string> = new Set(offersArr.map(offer => offer.product.category.shortName));
const shortNameSet: Set<string> = new Set(offersArr.map(offer => offer.product.shortName));
const sellerRankSet: Set<number> = new Set(offersArr.map(offer => offer.seller.rank));

const sellerRankTempArr = [...sellerRankSet].sort();
const sellerRankArr: Array<number> = [];
if (sellerRankTempArr.length < 2) {
  sellerRankArr[0] = sellerRankTempArr[0];
  sellerRankArr[1] = sellerRankTempArr[0];
} else {
  sellerRankArr[0] = sellerRankTempArr[0];
  sellerRankArr[1] = sellerRankTempArr[sellerRankTempArr.length - 1];
}

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
  category: [...categorySet],
  short: [...shortNameSet],
  price: [0, 500],
  condition: [Condition.NEW, Condition.USED1, Condition.USED2, Condition.USED3, Condition.BROKEN],
  quantity: [0, 100000],
  material: [Material.WOOD, Material.METAL, Material.PLASTIC, Material.CARDBOARD],
  length: [0, 3000],
  width: [0, 3000],
  height: [0, 3000],
  load: [0, 5000],
  sort: SortEnum.DEFAULT,
  sellerRank: [0, 5],
  offerRating: [0, 5],
  deliveryType: [DeliveryType.SELFPICKUP, DeliveryType.BUS, DeliveryType.TRUCK, DeliveryType.COURIER],
  days: [0, 100],
  state: states,
  VAT: [EnumVAT.ZERO, EnumVAT.FULL],
  payment: [PaymentType.CARD, PaymentType.CASH, PaymentType.INVOICE],
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


export const parametersObj = (productArg?: string) => {

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
  let category = INITIAL_STATE.category,
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

  const setSlider = (name: string) => {
    const sliderStr = parameters.getAll(`${name}`).join('-').split('-');
    const slider = [parseInt(sliderStr[0]), parseInt(sliderStr[1])];
    return slider;
  };

  if (!productArg) {
    category = parameters.getAll('category').join().split(',');
    short = parameters.getAll('short').join().split(',');
    price = setSlider('price');
    condition = parameters.getAll('condition').join().split(',') as Condition[];
    const quantityStr = parameters.getAll('quantity').join('').split('-');
    quantity = [parseInt(quantityStr[0]), parseInt(quantityStr[1])];
    material = parameters.getAll('material').join().split(',') as Material[];
    width = setSlider('width');
    length = setSlider('length');
    height = setSlider('height');
    load = setSlider('load');
    sort = parameters.get('sort') as SortEnum;
    sellerRank = setSlider('sellerRank');
    offerRating = setSlider('offerRating');
    deliveryType = parameters.getAll('deliveryType').join().split(',') as DeliveryType[];
    days = setSlider('days');
    state = parameters.getAll('state').join().split(',');
    VAT = parameters.getAll('VAT').join().split(',') as [];
    // const VATStr = parameters.getAll('VAT').join().split(',');
    // if (VATStr.length < 2) {
    //   VAT = [parseInt(VATStr[0]), parseInt(VATStr[0])];
    // } else VAT = [parseInt(VATStr[0]), parseInt(VATStr[1])];
    console.log(VAT);
    payment = parameters.getAll('payment').join().split(',') as PaymentType[];

  } else if (productArg === 'clear') {

    category = INITIAL_STATE.category;
    short = INITIAL_STATE.short;
    price = INITIAL_STATE.price;
    condition = INITIAL_STATE.condition;
    quantity = INITIAL_STATE.quantity;
    material = INITIAL_STATE.material;
    length = INITIAL_STATE.length;
    width = INITIAL_STATE.width;
    height = INITIAL_STATE.height;
    load = INITIAL_STATE.load;
    sort = INITIAL_STATE.sort;
    sellerRank = INITIAL_STATE.sellerRank;
    offerRating = INITIAL_STATE.offerRating;
    deliveryType = INITIAL_STATE.deliveryType;
    days = INITIAL_STATE.days;
    state = INITIAL_STATE.state;
    VAT = INITIAL_STATE.VAT;
    payment = INITIAL_STATE.payment;

    parameters.set('category', category.join(','));
    parameters.set('short', short.join(','));
    parameters.set('price', price.join('-'));
    parameters.set('condition', condition.join(','));
    parameters.set('quantity', quantity.join('-'));
    parameters.set('material', material.join(','));
    parameters.set('length', length.join('-'));
    parameters.set('width', width.join('-'));
    parameters.set('height', height.join('-'));
    parameters.set('load', load.join('-'));
    parameters.set('sort', sort);
    parameters.set('sellerRank', sellerRank.join('-'));
    parameters.set('offerRating', offerRating.join('-'));
    parameters.set('deliveryType', deliveryType.join(','));
    parameters.set('days', days.join('-'));
    parameters.set('state', state.join(','));
    parameters.set('VAT', VAT.join(','));
    parameters.set('payment', payment.join(','));

    window.location.hash = 'catalog-page';

    // } else if (INITIAL_STATE.short.includes(productArg)) {
    //   saveParametersBeforeProductPage();
    //   const productOffers: Array<IOffer> = offersArr
    //     .filter(offer => offer.product.shortName === productArg);
    //   console.log(productOffers);

    //   const priceSort = productOffers.sort((a, b) => a.price - b.price);
    //   const product = productOffers[0].product;

    //   parameters.set('category', product.category.shortName);
    //   parameters.set('short', product.shortName);
    //   parameters.set('price',
    // `${priceSort[0].price.toString()}-${priceSort[priceSort.length - 1].price.toString()}`);
    // parameters.set('condition', product.condition);
    // parameters.set('quantity', quantity.join('-'));
    // parameters.set('material', material.join(','));
    // parameters.set('length', length.join('-'));
    // parameters.set('width', width.join('-'));
    // parameters.set('height', height.join('-'));
    // parameters.set('load', load.join('-'));
    // parameters.set('sort', sort);
    // parameters.set('sellerRank', sellerRank.join('-'));
    // parameters.set('offerRating', offerRating.join('-'));
    // parameters.set('deliveryType', deliveryType.join(','));
    // parameters.set('days', days.join('-'));
    // parameters.set('state', state.join(','));
    // parameters.set('VAT', VAT.join(','));
    // parameters.set('payment', payment.join(','));

    // category = [productOffers[0].product.category.shortName];
    // short = parameters.getAll('short').join().split(',');
    // price = setSlider('price');
    // condition = parameters.getAll('condition').join().split(', ') as Condition[];
    // const quantityStr = parameters.getAll('quantity').join('').split('-');
    // quantity = [parseInt(quantityStr[0]), parseInt(quantityStr[1])];
    // material = parameters.getAll('material').join().split(',') as Material[];
    // width = setSlider('width');
    // length = setSlider('length');
    // height = setSlider('height');
    // load = setSlider('load');
    // sort = parameters.get('sort') as SortEnum;
    // sellerRank = setSlider('sellerRank');
    // offerRating = setSlider('offerRating');
    // deliveryType = parameters.getAll('deliveryType').join().split(',') as DeliveryType[];
    // days = setSlider('days');
    // state = parameters.getAll('state').join().split(',');
    // VAT = setSlider('VAT');
    // payment = parameters.getAll('payment').join().split(',') as PaymentType[];

    // parameters.set('category', product[0].category);
    // parameters.set('price', `${product[0].price.toString()}-${product[0].price.toString()}`);
    // parameters.set('quantity', '0-100000');
    // parameters.set('condition', product[0].condition);
    // parameters.set('material', product[0].material);
    // parameters.set('length', `${product[0].length.toString()}-${product[0].length.toString()}`);
    // parameters.set('width', `${product[0].width.toString()}-${product[0].width.toString()}`);
    // parameters.set('height', `${product[0].height.toString()}-${product[0].height.toString()}`);
    // parameters.set('load', `${product[0].load.toString()}-${product[0].load.toString()}`);
    // parameters.set('short', `${product[0].short}`);

    // price = setSlider('price');
    // width = setSlider('width');
    // length = setSlider('length');
    // height = setSlider('height');
    // load = setSlider('load');
    // category = product[0].category.split('');
    // quantity = INITIAL_STATE.quantity;
    // condition = product[0].condition.split('');
    // material = product[0].material.split('');
    // sort = INITIAL_STATE.sort;
    // short = [product[0].short];

    // loadParametersAfterPP();

    // saveParameters();
    // loadParameters();
    // window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';

    // window.location.hash = `${short}`;
  }

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
