//import Product from '../product/product';
import './product_card.scss';
import { parametersObj } from '../../parameters/parameters';
import Page from '../../templates/page';
import ProductPage from '../../../pages/product-page';
import App from '../../../pages/app';
import Offer from '../offer/offer';
import { DeliveryDays, Rating } from '../../types/types';

const PricesArray: number[] = [];
const DeliveryDaysArray: DeliveryDays[] = [];
const RatingArray: Rating[] = [];

export const createProductCard: (product: Offer, container: HTMLElement, i?: number) => void = (product, container) => {

  let page: Page | null = null;

  function createElement(tag: string, tagClass: string): void {
    const el = document.createElement(tag);
    el.classList.add(tagClass);
    container.append(el);
  }


  createElement('img', 'product__image');
  createElement('div', 'product__name');
  createElement('div', 'product__price');
  createElement('div', 'product__delivery');
  createElement('div', 'product__rating');
  createElement('button', 'product__button');

  const image = container.querySelector('.product__image') as HTMLImageElement;
  const name = container.querySelector('.product__name') as HTMLSpanElement;
  const price = container.querySelector('.product__price') as HTMLElement;
  const delivery = container.querySelector('.product__delivery') as HTMLElement;
  const rating = container.querySelector('.product__rating') as HTMLElement;
  const button = container.querySelector('.product__button') as HTMLElement;

  image.src = product.image1;
  const nameTitle = document.createElement('h2');
  nameTitle.className = 'name-title';
  nameTitle.innerText = product.name;

  const priceTitle = document.createElement('h2');
  priceTitle.className = 'price__title';
  priceTitle.innerText = 'Cena od:';
  const priceNum = document.createElement('h2');
  priceNum.className = 'price__value';
  priceNum.innerText = `${product.price.toString()} zł`;

  PricesArray.push(product.price);
  price.append(priceTitle, priceNum);

  const deliveryTitle = document.createElement('h2');
  deliveryTitle.className = 'delivery__title';
  deliveryTitle.innerText = 'Dni dostawy od:';
  const deliveryNum = document.createElement('h2');
  deliveryNum.className = 'delivery__value';
  product.delivery.forEach((el) => {
    const arrObj = {
      short: product.shortName,
      days: el.deliveryTime[0],
    };
    DeliveryDaysArray.push(arrObj);
    deliveryNum.textContent = `${el.deliveryTime[0].toString()} dni`;
  });

  delivery.append(deliveryTitle, deliveryNum);


  const ratingTitle = document.createElement('h2');
  ratingTitle.className = 'rating__title';
  ratingTitle.textContent = 'Ocena bestsellerów:';
  const ratingNum = document.createElement('h2');
  ratingNum.className = 'rating__value';
  ratingNum.textContent = `${product.rank.toString()} ★`;

  const rankObj = {
    short: product.shortName,
    rank: product.rank,
  };

  RatingArray.push(rankObj);

  rating.append(ratingTitle, ratingNum);

  button.textContent = 'Wybierać';


  button.addEventListener('click', () => {
    parametersObj(product.shortName);
    // saveParameters();
    page = new ProductPage('product-page');
    if (page) {
      window.location.hash = `product-page/${product.id}`;
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
    }
  });
  name.append(nameTitle);
};


export function updateProductCard(product: Offer) {
  setTimeout(() => {
    const prevPrice = document.querySelector('.product__price');
    const prevPriceNum = document.querySelector('.price__value');
    prevPriceNum?.remove();
    const prevDelivery = document.querySelector('.product__delivery');
    const prevDeliveryNum = document.querySelector('.delivery__value');
    prevDeliveryNum?.remove();
    const prevRating = document.querySelector('.product__rating');
    const prevRatingNum = document.querySelector('.rating__value');
    prevRatingNum?.remove();

    PricesArray.push(product.price);
    product.delivery.forEach((el) => {
      const arrObj = {
        short: product.shortName,
        days: el.deliveryTime[0],
      };
      DeliveryDaysArray.push(arrObj);
    });


    const newPrice = document.createElement('h2');
    newPrice.className = 'price__value';
    newPrice.textContent = `${Math.min(...PricesArray).toString()} zł`;
    prevPrice?.append(newPrice);


    const minDay = document.createElement('h2');
    minDay.className = 'delivery__value';
    const minArr: number[] = [];


    DeliveryDaysArray.forEach((el) => {
      if (product.shortName === el.short) {
        minArr.push(el.days);
      }
    });

    minDay.textContent = `${Math.min(...minArr).toString()} dni`;
    prevDelivery?.append(minDay);

    const newRankObj = {
      short: product.shortName,
      rank: product.rank,
    };

    RatingArray.push(newRankObj);

    const maxRank = document.createElement('h2');
    maxRank.className = 'rating__value';
    const maxRankArr: number[] = [];

    RatingArray.forEach((el) => {
      if (el.short === product.shortName) {
        maxRankArr.push(el.rank);
      }
    });

    maxRank.textContent = `${Math.max(...maxRankArr).toString()} ★`;
    prevRating?.append(maxRank);

  }, 100);
}

