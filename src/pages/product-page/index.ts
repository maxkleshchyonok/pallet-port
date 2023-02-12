import Page from '../../core/templates/page';
import Footer from '../../core/components/footer';
import './index.scss';
// import { parameters } from '../../core/components/parameters';
import offersJSON from '../../assets/json/_OffersArray.json';
import { parametersObj } from '../../core/parameters/parameters';
import { IOffer } from '../../core/types/types';

class ProductPage extends Page {

  private shortName: string | undefined;

  private nameValue: string | undefined;

  private descriptionValue: string | undefined;

  private widthValue: number | undefined;

  private lengthValue: number | undefined;

  private heightValue: number | undefined;

  private conditionValue: string | undefined;

  private loadValue: number | undefined;

  private materialValue: string | undefined;

  private image1: string | undefined;

  private image2: string | undefined;

  private footer: Footer;

  private offersBlock = document.createElement('div');

  private orderBlock = document.createElement('div');

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
        this.descriptionValue = item.product.description;
        this.widthValue = item.product.width;
        this.lengthValue = item.product.length;
        this.heightValue = item.product.height;
        this.conditionValue = item.product.condition;
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

    const itemDescription = document.createElement('p');
    const infoBlock = document.createElement('div');
    const split = document.createElement('img');


    nameTitle.className = 'product-name';
    itemDescription.className = 'product-description';
    infoBlock.className = 'product-info';
    split.className = 'splitter';

    if (typeof this.nameValue === 'string') {
      nameTitle.textContent = this.nameValue;
    }

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


    width.className = 'info-item';
    length.className = 'info-item';
    height.className = 'info-item';
    load.className = 'info-item';
    condition.className = 'info-item';
    material.className = 'info-item';

    width.textContent = `Width: ${this.widthValue}`;
    length.textContent = `Length: ${this.lengthValue}`;
    height.textContent = `Height: ${this.heightValue}`;
    load.textContent = `Load: ${this.loadValue}`;
    condition.textContent = `Condition: ${this.conditionValue}`;
    material.textContent = `Material: ${this.materialValue}`;


    infoBlock.append(width, length, height, load, condition, material);
    descriptionBlock.append(nameTitle, split, itemDescription, infoBlock);
    productBlock.append(photosBlock, bigPhoto, descriptionBlock);
    this.container.append(productBlock);
  }


  private renderOffersBlock() {

    this.orderBlock.className = 'order__block';
    this.orderBlock.textContent = 'Aby złożyć zamówienie, wybierz sprzedawcę';

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


        if (item.seller.avatar) {
          infoImg.src = item.seller.avatar;
        } else {
          infoImg.src = '../../assets/avatars/jan.png';
        }

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

        addButton.addEventListener('click', () => {
          this.renderSelectedOffers(item);
        });

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
    this.offersBlock.append(this.orderBlock);
    this.container.append(this.offersBlock);
  }

  private renderSelectedOffers(item: IOffer) {
    this.orderBlock.textContent = '';

    const container = document.createElement('div');
    const title = document.createElement('h1');
    const infoBlock = document.createElement('div');
    const sellerBlock = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h1');
    const phone = document.createElement('h1');
    const productDetails = document.createElement('div');
    const productImg = document.createElement('img');
    const productName = document.createElement('h1');
    const quantityBlock = document.createElement('div');
    const quantityTitle = document.createElement('h1');
    const quantityInput = document.createElement('input');
    const deliveryBlock = document.createElement('div');
    const deliveryTitle = document.createElement('h1');
    const deliveryMenu = document.createElement('fieldset');

    container.className = 'order__container';
    title.className = 'order__title';
    infoBlock.className = 'order__info';
    sellerBlock.className = 'info__seller';
    avatar.className = 'seller__avatar';
    name.className = 'seller__name';
    phone.className = 'seller__phone';
    productDetails.className = 'product__details';
    productImg.className = 'details__img';
    productName.className = 'details__name';
    quantityBlock.className = 'details__quantity';
    quantityTitle.className = 'quantity__title';
    quantityInput.className = 'quantity__input';
    deliveryBlock.className = 'details__delivery';
    deliveryTitle.className = 'delivery__title';
    deliveryMenu.className = 'delivery__menu';


    title.textContent = 'Szczegóły oferty';
    if (item.seller.avatar) {
      avatar.src = item.seller.avatar;
    }
    if (item.seller.name) {
      name.textContent = item.seller.name;
    }
    if (item.seller.phone) {
      phone.textContent = `Telefon: ${item.seller.phone}`;
    }


    productImg.src = item.product.image1;
    productName.textContent = item.product.name;

    quantityTitle.textContent = 'Ilość:';
    quantityInput.type = 'number';
    quantityInput.value = '1';

    deliveryTitle.textContent = 'Dostawa:';

    item.delivery.forEach((el) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      label.className = 'delivery__label';
      input.className = 'delivery__input';
      input.type = 'radio';
      label.textContent = el.deliveryType;
      deliveryMenu.append(input, label);
    });


    sellerBlock.append(avatar, name, phone);
    quantityBlock.append(quantityTitle, quantityInput);
    deliveryBlock.append(deliveryTitle, deliveryMenu);
    productDetails.append(productImg, productName, quantityBlock, deliveryBlock);
    infoBlock.append(sellerBlock, productDetails);
    container.append(title, infoBlock);
    this.orderBlock.append(container);
  }

  render(): HTMLElement {
    this.renderProductBlock();
    this.renderOffersBlock();
    this.container.append(this.footer.render());
    return this.container;
  }
}

export default ProductPage;
