//import Product from '../product/product';
import './product_card.scss';
import { parametersObj } from '../../parameters/parameters';
import Page from '../../templates/page';
import ProductPage from '../../../pages/product-page';
import App from '../../../pages/app';
import Offer from '../offer/offer';

const createProductCard: (product: Offer, container: HTMLElement, i?: number) => void = (product, container) => {

  let page: Page | null = null;

  function createElement(tag: string, tagClass: string): void {
    const el = document.createElement(tag);
    el.classList.add(tagClass);
    container.append(el);
  }


  createElement('img', 'product__image');
  createElement('div', 'product__name');
  createElement('h1', 'product__price');


  const image = container.querySelector('.product__image') as HTMLImageElement;
  const name = container.querySelector('.product__name') as HTMLSpanElement;
  const price = container.querySelector('.product__price') as HTMLElement;


  image.src = product.image1;
  const nameTitle = document.createElement('h2');
  nameTitle.className = 'name-title';
  nameTitle.innerText = product.name;
  price.innerText = product.price.toString();
  image.addEventListener('click', () => {
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

export default createProductCard;
