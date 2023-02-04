import Product from '../product/product';
import './product_card.scss';
import { parametersObj } from '../parameters';
import Page from '../../templates/page';
import ProductPage from '../../../pages/product-page';
import App from '../../../pages/app';

const createProductCard: (product: Product, container: HTMLElement, i?: number) => void = (product, container) => {

  let page: Page | null = null;

  function createElement(tag: string, tagClass: string): void {
    const el = document.createElement(tag);
    el.classList.add(tagClass);
    container.append(el);
  }


  createElement('img', 'product__image');
  createElement('div', 'product__name');
  createElement('div', 'product__length');
  createElement('div', 'product__width');
  createElement('div', 'product__load');
  createElement('div', 'product__quantity');
  createElement('div', 'product__buttons');

  const image = container.querySelector('.product__image') as HTMLImageElement;
  const name = container.querySelector('.product__name') as HTMLSpanElement;
  const length = container.querySelector('.product__length') as HTMLSpanElement;
  const width = container.querySelector('.product__width') as HTMLSpanElement;
  const load = container.querySelector('.product__load') as HTMLSpanElement;
  const quantity = container.querySelector('.product__quantity') as HTMLSpanElement;
  const buttons = container.querySelector('.product__buttons') as HTMLButtonElement;


  image.src = product.image1;
  const nameTitle = document.createElement('h2');
  nameTitle.className = 'name-title';
  nameTitle.innerText = product.name;
  image.addEventListener('click', () => {
    parametersObj(product.short);
    // saveParameters();
    page = new ProductPage('product-page');
    if (page) {
      window.location.hash = `product-page/${product.id}`;
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
    }
  });
  name.append(nameTitle);


  const lengthTitle = document.createElement('h3');
  const widthTitle = document.createElement('h3');
  const loadTitle = document.createElement('h3');
  const quantityTitle = document.createElement('h3');
  lengthTitle.className = 'title';
  widthTitle.className = 'title';
  loadTitle.className = 'title';
  quantityTitle.className = 'title';
  lengthTitle.innerText = 'Długość';
  widthTitle.innerText = 'Szerokość';
  loadTitle.innerText = 'Udźwig';
  quantityTitle.innerText = 'Na stanie';

  const lengthNum = document.createElement('h3');
  const widthNum = document.createElement('h3');
  const loadNum = document.createElement('h3');
  const quantityNum = document.createElement('h3');
  lengthNum.className = 'numberOf';
  widthNum.className = 'numberOf';
  loadNum.className = 'numberOf';
  quantityNum.className = 'numberOf';
  lengthNum.innerText = `${product.length} mm`;
  widthNum.innerText = `${product.width} mm`;
  loadNum.innerText = `${product.load} kg`;
  quantityNum.innerText = `${product.quantity} szt.`;
  length.append(lengthTitle, lengthNum);
  width.append(widthTitle, widthNum);
  load.append(loadTitle, loadNum);
  quantity.append(quantityTitle, quantityNum);

  const buyButton = document.createElement('div');
  buyButton.className = 'product__button';
  const likeButton = document.createElement('button');
  const likeButtonImg = document.createElement('img');
  likeButtonImg.src = '../../../assets/img/elements/like.svg';
  likeButton.append(likeButtonImg);
  likeButton.className = 'product__like';

  const buttonImage = document.createElement('img');
  buttonImage.src = '../../../assets/img/elements/button-cart.svg';
  const buttonSplit = document.createElement('img');
  buttonSplit.src = '../../../assets/img/elements/button-split.svg';
  const buttonPrice = document.createElement('h3');
  buttonPrice.innerText = `${product.price} zł.`;

  if (localStorage.getItem(`${product.short}`)) {
    buyButton.innerText = 'W koszyku';
    buttonPrice.innerText = '';
  }

  buyButton.addEventListener('click', () => {
    buyButton.innerText = 'W koszyku';
    localStorage.setItem(`${product.short}`, '1');
  });

  buyButton.append(buttonImage, buttonSplit, buttonPrice);
  buttons.append(buyButton, likeButton);

};

export default createProductCard;
