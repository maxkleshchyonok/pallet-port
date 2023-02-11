import Page from '../../core/templates/page';
import Footer from '../../core/components/footer';
import './index.scss';
// import { parameters } from '../../core/components/parameters';
import offersJSON from '../../assets/json/_OffersArray.json';
import { parametersObj } from '../../core/parameters/parameters';

class ProductPage extends Page {

  private shortName: string | undefined;

  private nameValue: string | undefined;

  private priceValue: number | undefined;

  private descriptionValue: string | undefined;

  private widthValue: number | undefined;

  private lengthValue: number | undefined;

  private heightValue: number | undefined;

  private conditionValue: string | undefined;

  private quantityValue: number | undefined;

  private loadValue: number | undefined;

  private materialValue: string | undefined;

  private image1: string | undefined;

  private image2: string | undefined;

  private footer: Footer;

  static TextObject = {
    MainTitle: 'Product page',
  };

  constructor(id: string) {
    super(id);
    this.footer = new Footer('footer', 'footer-container');
  }

  private renderProductBlock(): void {
    for (const item of offersJSON) {
      if (item.product.shortName === parametersObj().short[0]) {
        this.nameValue = item.product.name;
        //this.priceValue = item.product.price;
        this.descriptionValue = item.product.description;
        this.widthValue = item.product.width;
        this.lengthValue = item.product.length;
        this.heightValue = item.product.height;
        this.conditionValue = item.product.condition;
        //this.quantityValue = item.quantity;
        this.loadValue = item.product.maxLoad;
        this.materialValue = item.product.material;
        this.image1 = item.product.image1;
        this.image2 = item.product.image2;
        this.shortName = item.product.shortName;
      }
    }

    const productBlock = document.createElement('div');
    productBlock.className = 'product-block';

    const photosBlock = document.createElement('div');
    const bigPhoto = document.createElement('div');
    const descriptionBlock = document.createElement('div');
    photosBlock.className = 'photos-block';
    bigPhoto.className = 'big-photo';
    descriptionBlock.className = 'description-block';

    const bigPhotoImg = document.createElement('img');
    if (typeof this.image1 === 'string') {
      bigPhotoImg.src = this.image1;
    }
    bigPhoto.append(bigPhotoImg);

    for (let i = 0; i < 4; i += 1) {
      const item = document.createElement('img');
      item.addEventListener('click', () => {
        bigPhotoImg.src = item.src;
      });
      photosBlock.append(item);
      switch (i) {
        case 1:
          if (typeof this.image1 === 'string') {
            item.src = this.image1;
          }
          item.className = 'photos-item';
          break;
        case 2:
          if (typeof this.image2 === 'string') {
            item.src = this.image2;
          }
          item.className = 'photos-item';
          break;
      }
    }

    const nameTitle = document.createElement('h1');
    //const buttonsBlock = document.createElement('div');
    const priceBlock = document.createElement('h2');
    const buyButton = document.createElement('button');
    const likeButton = document.createElement('button');
    const like = document.createElement('img');
    const itemDescription = document.createElement('p');
    const infoBlock = document.createElement('div');
    const split = document.createElement('img');
    //const amountButton = document.createElement('div');
    let number = 1;

    nameTitle.className = 'product-name';
    //buttonsBlock.className = 'buttons-block';
    buyButton.className = 'buttons-buy';
    likeButton.className = 'buttons-like';
    priceBlock.className = 'price';
    itemDescription.className = 'product-description';
    infoBlock.className = 'product-info';
    split.className = 'splitter';

    if (typeof this.nameValue === 'string') {
      nameTitle.textContent = this.nameValue;
    }
    priceBlock.textContent = `${this.priceValue} zl`;
    // buyButton.innerText = 'Dodaj do koszyka';
    // buyButton.addEventListener('click', () => {
    //   amountButton.classList.add('activated');
    //   localStorage.setItem(`${this.shortName}`, `${number}`);
    // });

    const minus = document.createElement('div');
    const plus = document.createElement('div');
    const numberBlock = document.createElement('div');
    const infoNumber = document.createElement('h3');
    const infoTitle = document.createElement('p');

    minus.className = 'button-minus';
    plus.className = 'button-plus';
    numberBlock.className = 'button-info-block';
    infoNumber.className = 'info-number';
    infoTitle.className = 'info-title';
    //amountButton.className = 'amount-buttons';

    infoTitle.textContent = 'W koszyku';
    infoNumber.textContent = `${number}`;
    minus.textContent = '-';
    plus.textContent = '+';
    minus.addEventListener('click', () => {
      number -= 1;
      infoNumber.textContent = `${number}`;
      localStorage.setItem(`${this.shortName}`, `${number}`);
    });
    plus.addEventListener('click', () => {
      number += 1;
      infoNumber.textContent = `${number}`;
      localStorage.setItem(`${this.shortName}`, `${number}`);
    });

    numberBlock.append(infoNumber, infoTitle);
    //amountButton.append(minus, numberBlock, plus);

    like.src = '../../assets/img/elements/like.svg';
    likeButton.append(like);
    split.src = '../../assets/img/elements/split-horizontal.svg';
    if (typeof this.descriptionValue === 'string') {
      itemDescription.textContent = this.descriptionValue;
    }

    const width = document.createElement('h3');
    const length = document.createElement('h3');
    const height = document.createElement('h3');
    const load = document.createElement('h3');
    const condition = document.createElement('h3');
    const material = document.createElement('h3');
    const quantity = document.createElement('h3');

    width.className = 'info-item';
    length.className = 'info-item';
    height.className = 'info-item';
    load.className = 'info-item';
    condition.className = 'info-item';
    material.className = 'info-item';
    quantity.className = 'info-item';

    width.textContent = `Width: ${this.widthValue}`;
    length.textContent = `Length: ${this.lengthValue}`;
    height.textContent = `Height: ${this.heightValue}`;
    load.textContent = `Load: ${this.loadValue}`;
    condition.textContent = `Condition: ${this.conditionValue}`;
    material.textContent = `Material: ${this.materialValue}`;
    quantity.textContent = `Quantity: ${this.quantityValue}`;


    //buttonsBlock.append(priceBlock, buyButton, likeButton);
    infoBlock.append(width, length, height, load, condition, material, quantity);
    descriptionBlock.append(nameTitle, split, itemDescription, infoBlock);
    productBlock.append(photosBlock, bigPhoto, descriptionBlock);
    this.container.append(productBlock);
  }

  private offersBlock = document.createElement('div');

  private renderOffersBlock() {


    const cards = document.createElement('div');
    this.offersBlock.className = 'offers__block';
    cards.className = 'offers';

    for (const item of offersJSON) {
      if (item.product.shortName === parametersObj().short[0]) {
        const offerCard = document.createElement('div');
        const infoImg = document.createElement('img');
        const offerDetails = document.createElement('div');
        const sellerInfo = document.createElement('div');
        const infoName = document.createElement('h1');
        const infoRank = document.createElement('h1');
        const productInfo = document.createElement('div');
        const price = document.createElement('div');
        const priceTitle = document.createElement('h1');
        const priceValue = document.createElement('h1');
        const priceTest = document.createElement('p');
        const quantity = document.createElement('div');
        const quantityTitle = document.createElement('h1');
        const quantityNum = document.createElement('h1');
        const delivery = document.createElement('div');
        const deliveryTitle = document.createElement('h1');
        const deliveryImg = document.createElement('img');
        const addButton = document.createElement('button');

        offerCard.className = 'offer__card';
        sellerInfo.className = 'card__info';
        infoImg.className = 'info__img';
        infoName.className = 'info__name';
        infoRank.className = 'info__rank';
        offerDetails.className = 'card__details';
        price.className = 'details__price';
        priceTitle.className = 'price__title';
        priceValue.className = 'price__number';
        priceTest.className = 'price__test__value';
        quantity.className = 'details__quantity';
        quantityTitle.className = 'quantity__title';
        quantityNum.className = 'quantity__value';
        delivery.className = 'details__delivery';
        deliveryTitle.className = 'delivery__title';
        deliveryImg.className = 'delivery__img';
        addButton.className = 'card__button';
        productInfo.className = 'product__info';

        infoImg.src = item.seller.avatar;
        infoName.textContent = item.seller.name;
        infoRank.textContent = `${item.seller.rank} ★`;
        priceTitle.textContent = 'Cena: ';
        priceValue.textContent = `${item.price} zł`;
        priceTest.textContent = '1000';
        quantityTitle.textContent = 'W magazynie:';
        quantityNum.textContent = item.quantity.toString();
        deliveryTitle.textContent = 'Dostawa: ';
        deliveryImg.src = '../../../assets/img/elements/no-icon.png';


        item.delivery.forEach((el) => {
          if (el.deliveryType !== 'Odbiór osobisty') {
            deliveryImg.src = '../../../assets/img/elements/yes-icon.jpg';
          }
        });

        addButton.textContent = 'Dodać';

        price.append(priceTitle, priceValue);
        quantity.append(quantityTitle, quantityNum);
        delivery.append(deliveryTitle, deliveryImg);
        sellerInfo.append(infoName, infoRank);
        productInfo.append(price, quantity, delivery);
        offerDetails.append(sellerInfo, productInfo);
        offerCard.append(infoImg, offerDetails, addButton);
        cards.append(offerCard);
      }
    }
    this.offersBlock.append(cards);
    this.container.append(this.offersBlock);
  }

  private renderSelectedOffers() {

    const orderBlock = document.createElement('div');
    orderBlock.className = 'order__block';

    orderBlock.textContent = 'Aby złożyć zamówienie, wybierz sprzedawcę';


    this.offersBlock.append(orderBlock);
  }

  render(): HTMLElement {
    this.renderProductBlock();
    this.renderOffersBlock();
    this.renderSelectedOffers();
    this.container.append(this.footer.render());
    return this.container;
  }
}

export default ProductPage;
