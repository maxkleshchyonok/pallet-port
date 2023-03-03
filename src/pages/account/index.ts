import { getOrdersByUser, getUserByEmail, userLogout } from '../../core/components/api/api';
import Page from '../../core/templates/page';
import './index.css';
import { IProduct, IProductCategory, Order, User } from '../../core/types/types';
import Footer from '../../core/components/footer';
import _ProductsArray from '../../assets/json/_ProductsArray.json';
import _ProductsCategory from '../../assets/json/_ProductsCategory.json';

let respondFromServer: Order[];
getOrdersByUser().then(response => respondFromServer = [...response]);

let userData: User;
getUserByEmail(localStorage.getItem('email'))
  .then(response => userData = response);


class AccountPage extends Page {

  private footer: Footer;

  constructor(id: string) {
    super(id);
    this.footer = new Footer('footer', 'footer-container');
  }

  static TextObject = {
    MainTitle: 'Account Page',
  };

  static productsArray: IProduct[] = [..._ProductsArray];

  static categoriesArray: IProductCategory[] = [..._ProductsCategory];


  private renderContent(): void {
    const content = document.createElement('div');
    const navbar = document.createElement('div');
    const main = document.createElement('div');
    const user = document.createElement('div');

    content.className = 'account__content';
    navbar.className = 'content__navbar';
    main.className = 'content__main';
    user.className = 'content__user';

    const siteNav = document.createElement('div');
    const mainPage = document.createElement('h3');
    const dot = document.createElement('div');
    const currentPage = document.createElement('h3');

    siteNav.className = 'siteNav';
    mainPage.className = 'siteNav__main';
    dot.className = 'siteNav__dot';
    currentPage.className = 'siteNav__current';

    function renderMainDane(): void {

      function createInputElement(className: string, placeholder: string, parent: HTMLElement): void {
        const input = document.createElement('input');
        input.className = className;
        input.placeholder = placeholder;
        if (className === 'wysylka__checkBox') {
          const div = document.createElement('div');
          div.className = 'checkbox__block';
          const label = document.createElement('label');
          input.type = 'checkbox';
          label.textContent = 'Taki sam jak powyższy ';
          div.append(input, label);
          parent.append(div);
        } else {
          parent.append(input);
        }
      }

      const daneBlock = document.createElement('div');
      const address = document.createElement('div');
      const addressWys = document.createElement('div');
      const daneTitle = document.createElement('h2');
      const addressTitle = document.createElement('h2');
      const addressWysTitle = document.createElement('h2');

      daneBlock.classList.add('dane', 'account-item');
      address.classList.add('address', 'account-item');
      addressWys.classList.add('wysylka', 'account-item');
      daneTitle.className = 'dane__title';
      addressTitle.className = 'address__title';
      addressWysTitle.className = 'address_wys__title';

      createInputElement('dane__name', 'Imię i nazwisko', daneBlock);
      createInputElement('dane__phone', 'Numer telefonu ((+48) 000-000-000)', daneBlock);
      createInputElement('dane__email', 'Email (login email)', daneBlock);
      createInputElement('dane__password', 'Nowe hasło', daneBlock);
      createInputElement('address__country', 'Kraj (PL)', address);
      createInputElement('address__region', 'Województwo (mazowieckie)', address);
      createInputElement('address__street', 'Ulica (Centralna)', address);
      createInputElement('address__dom', 'Dom (1)', address);
      createInputElement('address__apt', 'Mieszkanie (2)', address);
      createInputElement('address__zip', 'Kod (02-000)', address);
      createInputElement('wysylka__checkBox', 'Taki sam jak powyższy ', addressWys);
      createInputElement('wysylka__country', 'Kraj (PL)', addressWys);
      createInputElement('wysylka__region', 'Województwo (mazowieckie)', addressWys);
      createInputElement('wysylka__street', 'Ulica (Centralna)', addressWys);
      createInputElement('wysylka__dom', 'Dom (1)', addressWys);
      createInputElement('wysylka__apt', 'Mieszkanie (2)', addressWys);
      createInputElement('wysylka__zip', 'Kod (02-000)', addressWys);


      daneTitle.textContent = 'Dane konta';
      addressTitle.textContent = 'Adres';
      addressWysTitle.textContent = 'Adres do wysyłki';

      daneBlock.append(daneTitle);
      address.append(addressTitle);
      addressWys.append(addressWysTitle);
      main.append(daneBlock, address, addressWys);

    }

    function renderUserBlock() {
      const avatarBlock = document.createElement('div');
      const avatar = document.createElement('img');
      const editAvatar = document.createElement('img');
      const roles = document.createElement('div');
      const rolesTitle = document.createElement('h3');
      const ratingBlock = document.createElement('div');
      const ratingTitle = document.createElement('h3');
      const ratingNumber = document.createElement('h1');
      const saveButton = document.createElement('button');
      const deleteButton = document.createElement('button');

      avatarBlock.className = 'user__avatar';
      avatar.className = 'avatar__image';
      editAvatar.className = 'avatar__edit';
      roles.className = 'user__roles';
      rolesTitle.className = 'roles__title';
      ratingBlock.className = 'user__rating';
      ratingTitle.className = 'rating__title';
      ratingNumber.className = 'rating__number';
      saveButton.className = 'user__saveButton';
      deleteButton.className = 'user__deleteButton';

      avatar.src = '../../assets/img/elements/account-user.svg';
      editAvatar.src = '../../assets/img/elements/edit-avatar.svg';
      rolesTitle.textContent = 'Moje role';
      ratingTitle.textContent = 'Moja ocena';
      ratingNumber.textContent = '5';

      saveButton.textContent = 'Zapisz';
      deleteButton.textContent = 'Usuń konto';

      roles.append(rolesTitle);

      for (let i = 0; i < 3; i += 1) {
        const div = document.createElement('div');
        const input = document.createElement('input');
        const label = document.createElement('label');
        div.className = 'roles__checkbox';
        input.className = 'checkbox__input';
        label.className = 'checkbox__label';
        input.type = 'checkbox';
        switch (i) {
          case 0:
            label.textContent = 'Kupujący';
            break;
          case 1:
            label.textContent = 'Sprzedający';
            break;
          case 2:
            label.textContent = 'Kurier';
            break;
        }
        div.append(input, label);
        roles.append(div);
      }

      avatarBlock.append(avatar, editAvatar);
      ratingBlock.append(ratingTitle, ratingNumber);
      user.append(avatarBlock, roles, ratingBlock, saveButton, deleteButton);

    }

    function renderFirmsBlock() {
      const firmaBlock = document.createElement('div');
      const firmaHours = document.createElement('div');
      const firmaHoursTitle = document.createElement('h3');
      const addressBlock = document.createElement('div');
      const firmaTitle = document.createElement('h2');
      const addressTitle = document.createElement('h2');

      firmaBlock.classList.add('firma', 'account-item');
      firmaHours.className = 'firma__hours';
      firmaHoursTitle.className = 'hours__title';
      addressBlock.classList.add('address', 'account-item');
      firmaTitle.className = 'firma__title';
      addressTitle.className = 'firm__address__title';

      firmaTitle.textContent = 'Moje firmy';
      addressTitle.textContent = 'Adres';

      const openSelect = document.createElement('select');
      openSelect.className = 'open-hours';
      let openVal = 0;
      for (let i = 0; i < 25; i += 1) {
        const option = document.createElement('option');
        option.className = 'open-option';
        option.value = openVal.toString();
        option.textContent = `${openVal.toString()}:00`;
        openVal += 1;
        openSelect.append(option);
      }
      const closeSelect = document.createElement('select');
      closeSelect.className = 'close-hours';
      let closeVal = 0;
      for (let i = 0; i < 25; i += 1) {
        const option = document.createElement('option');
        option.className = 'close-option';
        option.value = closeVal.toString();
        option.textContent = `${closeVal.toString()}:00`;
        closeVal += 1;
        closeSelect.append(option);
      }

      firmaHoursTitle.textContent = 'Godziny pracy';
      firmaHours.append(firmaHoursTitle, openSelect, closeSelect);


      function createInputElement(className: string, placeholder: string, parent: HTMLElement) {
        const input = document.createElement('input');
        input.className = className;
        input.placeholder = placeholder;
        parent.append(input);
      }

      firmaBlock.append(firmaTitle);
      createInputElement('firm__name', 'Nazwa firmy', firmaBlock);
      createInputElement('firm__phone', 'Numer telefonu ((+48) 000-000-000)', firmaBlock);
      createInputElement('firm__email', 'Email (login email)', firmaBlock);
      createInputElement('firm__nip', 'NIP (1234567890)', firmaBlock);
      createInputElement('firm__iban', 'IBAN (PL12345678901234567890123456)', firmaBlock);
      createInputElement('firm__vat', 'VAT, %', firmaBlock);
      createInputElement('firm__termin', 'Termin płatności, dni', firmaBlock);
      firmaBlock.append(firmaHours);
      addressBlock.append(addressTitle);
      createInputElement('adres__country', 'Kraj (PL)', addressBlock);
      createInputElement('adres__region', 'Województwo (mazowieckie)', addressBlock);
      createInputElement('adres__street', 'Ulica (Centralna)', addressBlock);
      createInputElement('adres__building', 'Dom (1)', addressBlock);
      createInputElement('adres__apt', 'Mieszkanie (2)', addressBlock);
      createInputElement('adres__zip', 'Kod (02-000)', addressBlock);


      main.append(firmaBlock, addressBlock);
    }

    function renderOrdersBlock(): void {
      const searchBlock = document.createElement('div');
      const searchTitle = document.createElement('h2');
      const searchField = document.createElement('div');
      const searchInput = document.createElement('input');
      const searchButton = document.createElement('button');
      const categoryBlock = document.createElement('div');
      const orders = document.createElement('div');

      searchBlock.className = 'search';
      searchTitle.className = 'search__title';
      searchField.className = 'search__field';
      searchInput.className = 'search__input';
      searchButton.className = 'search__button';
      categoryBlock.className = 'categories';
      orders.className = 'orders';

      searchTitle.textContent = 'Moje zakupy';
      searchInput.placeholder = 'Wpisz nazwę towaru';
      searchButton.textContent = 'Shukaj';

      for (let i = 0; i < 8; i += 1) {
        const div = document.createElement('div');
        div.className = 'category__item';
        switch (i) {
          case 0:
            div.textContent = 'Wszystkie';
            break;
          case 1:
            div.textContent = 'Nieoplacone';
            break;
          case 2:
            div.textContent = 'W toku';
            break;
          case 3:
            div.textContent = 'W drodze / Do odbioru';
            break;
          case 4:
            div.textContent = 'Zwroty';
            break;
          case 5:
            div.textContent = 'Anulowane';
            break;
          case 6:
            div.textContent = 'Dostarczone';
            break;
          case 7:
            div.textContent = 'Do oceny';
            break;
        }
        div.addEventListener('click', () => {
          const all = document.querySelectorAll('.category__item');
          all.forEach((el) => {
            el.classList.remove('item_selected');
          });
          div.classList.add('item_selected');
        });
        categoryBlock.append(div);
      }


      respondFromServer.forEach((item) => {
        item.cart.offers?.forEach((el) => {
          const order = document.createElement('div');
          const image = document.createElement('img');
          const description = document.createElement('div');
          const name = document.createElement('h2');
          const condition = document.createElement('h2');
          const amountBlock = document.createElement('div');
          const quantity = document.createElement('h3');
          const price = document.createElement('h3');
          const totalPrice = document.createElement('h3');
          const buyBlock = document.createElement('div');
          const delivery = document.createElement('div');
          const deliveryTitle = document.createElement('h3');
          const deliveryOption = document.createElement('h4');
          const fullPrice = document.createElement('h2');
          const buyButton = document.createElement('button');

          order.className = 'order';
          image.className = 'order__image';
          description.className = 'order__description';
          name.className = 'description__name';
          condition.className = 'description__condition';
          amountBlock.className = 'order__amount';
          quantity.className = 'amount__quantity';
          price.className = 'amount__price';
          totalPrice.className = 'amount__total';
          buyBlock.className = 'order__buy';
          delivery.className = 'buy__delivery';
          deliveryTitle.className = 'delivery__title';
          deliveryOption.className = 'delivery__option';
          fullPrice.className = 'buy__price';
          buyButton.className = 'buy__button';


          image.src = el.offer.product.image1;
          name.textContent = el.offer.product.name;
          condition.textContent = el.offer.product.condition;
          quantity.textContent = `${el.quantity} x ${el.offer.quantityMax} szt`;
          price.textContent = `${el.offer.price} zł/szt`;
          totalPrice.textContent = `${el.offer.price * el.quantity} zł`;
          deliveryTitle.textContent = 'Z dostawą:';
          deliveryOption.textContent = el.delivery.deliveryType;
          fullPrice.textContent = `${el.offer.price * el.quantity + el.delivery.deliveryPrice} zł`;
          buyButton.textContent = 'Zapłać';


          delivery.append(deliveryTitle, deliveryOption);
          buyBlock.append(delivery, fullPrice, buyButton);
          amountBlock.append(quantity, price, totalPrice);
          description.append(name, condition);
          order.append(image, description, amountBlock, buyBlock);
          orders.append(order);
        });
      });


      searchField.append(searchInput, searchButton);
      searchBlock.append(searchTitle, searchField);
      main.append(searchBlock, categoryBlock, orders);
    }

    // function renderOffersCards(): void {
    //
    // }

    function renderDeliveryOptionsDetails(parent: HTMLElement): void {
      const details = document.createElement('div');
      const deliveryPrice = document.createElement('div');
      const priceTitle = document.createElement('h3');
      const priceInput = document.createElement('input');
      const priceHolder = document.createElement('p');
      const deliveryTime = document.createElement('div');
      const timeTitle = document.createElement('h3');
      const from = document.createElement('div');
      const fromHolder = document.createElement('p');
      const fromInput = document.createElement('input');
      const till = document.createElement('div');
      const tillHolder = document.createElement('p');
      const tillInput = document.createElement('input');


      priceTitle.textContent = 'Cena dostawy:';
      timeTitle.textContent = 'Termin dostawy:';
      priceHolder.textContent = 'zł netto';
      fromHolder.textContent = 'od';
      tillHolder.textContent = 'do';


      till.append(tillHolder, tillInput);
      from.append(fromHolder, fromInput);
      deliveryTime.append(timeTitle, from, till);
      deliveryPrice.append(priceTitle, priceInput, priceHolder);
      details.append(deliveryPrice, deliveryTime);
      parent.append(details);
    }

    function renderOfferForm(parent: HTMLElement): void {
      const createBlock = document.createElement('div');
      const product = document.createElement('div');
      const productTitle = document.createElement('h2');
      const productChoose = document.createElement('select');
      const condition = document.createElement('div');
      const conditionTitle = document.createElement('h2');
      const conditionChoose = document.createElement('select');
      const category = document.createElement('div');
      const categoryTitle = document.createElement('h2');
      const categoryChoose = document.createElement('select');
      const price = document.createElement('div');
      const priceTitle = document.createElement('h2');
      const priceInput = document.createElement('input');
      const priceHolder = document.createElement('p');
      const quantity = document.createElement('div');
      const quantityTitle = document.createElement('h2');
      const quantityMin = document.createElement('div');
      const quantityMinTitle = document.createElement('h3');
      const quantityMinInput = document.createElement('input');
      const quantityMax = document.createElement('div');
      const quantityMaxTitle = document.createElement('h3');
      const quantityMaxInput = document.createElement('input');
      const quantityHolder = document.createElement('p');
      const delivery = document.createElement('div');
      const deliveryTitle = document.createElement('h2');
      const noDelivery = document.createElement('div');
      const noDeliveryInput = document.createElement('input');
      const noDeliveryLabel = document.createElement('label');
      const yesDelivery = document.createElement('div');
      const yesDeliveryInput = document.createElement('input');
      const yesDeliveryLabel = document.createElement('label');
      const deliverySelect = document.createElement('select');
      const seller = document.createElement('div');
      const sellerTitle = document.createElement('h2');
      const sellerSelect = document.createElement('select');
      const addImages = document.createElement('div');
      const addImagesTitle = document.createElement('h2');
      const addImagesButton = document.createElement('input');
      const addOfferButton = document.createElement('button');

      createBlock.className = 'create-block';
      product.className = 'create__product';
      productTitle.className = 'product__title';
      productChoose.className = 'product__choose';
      condition.className = 'create__condition';
      conditionTitle.className = 'condition__title';
      conditionChoose.className = 'condition__choose';
      category.className = 'create__category';
      categoryTitle.className = 'category__title';
      categoryChoose.className = 'category__choose';
      price.className = 'create__price';
      priceTitle.className = 'price__title';
      priceInput.className = 'price__input';
      priceHolder.className = 'price__holder';
      quantity.className = 'create__quantity';
      quantityTitle.className = 'quantity__title';
      quantityMin.className = 'quantity__min';
      quantityMinTitle.className = 'min__title';
      quantityMinInput.className = 'min__input';
      quantityMax.className = 'quantity__max';
      quantityMaxTitle.className = 'max__title';
      quantityMaxInput.className = 'max__input';
      quantityHolder.className = 'quantity__holder';
      delivery.className = 'create__delivery';
      deliveryTitle.className = 'delivery__title';
      noDelivery.className = 'delivery__no-checkbox';
      noDeliveryInput.className = 'no-checkbox__input';
      noDeliveryLabel.className = 'no-checkbox__label';
      yesDelivery.className = 'delivery__yes-checkbox';
      yesDeliveryInput.className = 'yes-checkbox__input';
      yesDeliveryLabel.className = 'yes-checkbox__label';
      deliverySelect.className = 'delivery__select';
      seller.className = 'create__seller';
      sellerTitle.className = 'seller__title';
      sellerSelect.className = 'seller__select';
      addImages.className = 'create__image';
      addImagesTitle.className = 'image__title';
      addImagesButton.className = 'create__image-button';
      addOfferButton.className = 'create__offer-button';

      const conditionArray: string[] = [
        'Nowe', 'Używane 1 gatunku', 'Używane 2 gatunku', 'Używane 3 gatunku', 'Uszkodzone',
      ];

      conditionArray.forEach((elem) => {
        const conditionOption = document.createElement('option');
        conditionOption.className = 'choose__condition-option';
        conditionOption.textContent = elem;
        conditionChoose.append(conditionOption);
      });

      AccountPage.productsArray.forEach((elem) => {
        const productOption = document.createElement('option');
        productOption.className = 'choose__product-option';
        productOption.textContent = elem.name;
        productChoose.append(productOption);
      });

      AccountPage.categoriesArray.forEach((elem) => {
        const categoriesOption = document.createElement('option');
        categoriesOption.className = 'choose__category-option';
        categoriesOption.textContent = elem.name;
        categoryChoose.append(categoriesOption);
      });

      userData.companies?.forEach((elem) => {
        const sellerOption = document.createElement('option');
        sellerOption.className = 'seller-select__option';
        sellerOption.textContent = elem.name;
        sellerSelect.append(sellerOption);
      });


      productTitle.textContent = 'Product:';
      conditionTitle.textContent = 'Stan:';
      categoryTitle.textContent = 'Category:';
      priceTitle.textContent = 'Cena:';
      priceHolder.textContent = 'zł netto';
      quantityTitle.textContent = 'Iłość:';
      quantityMinTitle.textContent = 'od';
      quantityMaxTitle.textContent = 'do';
      quantityHolder.textContent = 'szt';

      priceInput.type = 'number';
      priceInput.placeholder = '0';
      quantityMinInput.type = 'number';
      quantityMaxInput.type = 'number';
      quantityMinInput.placeholder = '0';
      quantityMaxInput.placeholder = '0';

      addImagesButton.type = 'file';
      addImagesButton.placeholder = 'Dodaj zdjęcia';

      const fileName = document.createElement('p');
      fileName.className = 'file-name';
      // addImagesButton.addEventListener('change', (e) => {
      //   const [file] = e.target.file;
      //   const { name: filename, size } = file;
      //   const fileSize = (size / 1000).toFixed(2);
      //   fileName.textContent = `${filename} - ${fileSize}KB`;
      // });

      deliveryTitle.textContent = 'Dostawa:';
      noDeliveryLabel.textContent = 'Odbiór osobisty';
      noDeliveryInput.type = 'checkbox';
      yesDeliveryInput.type = 'checkbox';
      yesDeliveryLabel.textContent = 'Kurierska dostawa';
      if (noDeliveryInput.checked) {
        console.log('pressed');
        renderDeliveryOptionsDetails(delivery);
      }
      if (yesDeliveryInput.checked) {
        yesDelivery.append(deliverySelect);
        renderDeliveryOptionsDetails(delivery);
      }

      sellerTitle.textContent = 'Sprzedawca:';
      addImagesTitle.textContent = 'Dodaj zdjęcia:';
      //addImagesButton.textContent = 'Dodaj zdjęcia';
      addOfferButton.textContent = 'Zapisz';



      product.append(productTitle, productChoose);
      condition.append(conditionTitle, conditionChoose);
      category.append(categoryTitle, categoryChoose);
      price.append(priceTitle, priceInput, priceHolder);
      quantity.append(quantityTitle, quantityMin, quantityMax, quantityHolder);
      quantityMin.append(quantityMinTitle, quantityMinInput);
      quantityMax.append(quantityMaxTitle, quantityMaxInput);
      delivery.append(deliveryTitle, noDelivery, yesDelivery);
      noDelivery.append(noDeliveryInput, noDeliveryLabel);
      yesDelivery.append(yesDeliveryInput, yesDeliveryLabel);
      seller.append(sellerTitle, sellerSelect);
      addImages.append(addImagesTitle, addImagesButton);
      createBlock.append(product, condition, category, price,
        quantity, delivery, seller, addImages, addOfferButton);
      parent.append(createBlock);
    }

    function renderOffersBlock(): void {
      const searchBlock = document.createElement('div');
      const searchTitle = document.createElement('h2');
      const searchField = document.createElement('div');
      const searchInput = document.createElement('input');
      const searchButton = document.createElement('button');
      const categoryBlock = document.createElement('div');
      const offers = document.createElement('div');

      searchBlock.className = 'search';
      searchTitle.className = 'search__title';
      searchField.className = 'search__field';
      searchInput.className = 'search__input';
      searchButton.className = 'search__button';
      categoryBlock.classList.add('categories', 'offers-page');
      offers.className = 'offers';

      searchTitle.textContent = 'Moje oferty';
      searchInput.placeholder = 'Wpisz nazwę towaru';
      searchButton.textContent = 'Shukaj';

      for (let i = 0; i < 5; i += 1) {
        const button = document.createElement('button');
        button.classList.add('category__item', 'offers-item');
        switch (i) {
          case 0:
            button.textContent = 'Wszystkie';
            break;
          case 1:
            button.textContent = 'Aktywne';
            break;
          case 2:
            button.textContent = 'Moderacja';
            break;
          case 3:
            button.textContent = 'Zakończone';
            break;
          case 4:
            button.textContent = 'Dodaj nową ofertę';
            button.classList.add('add__button');
            button.addEventListener('click', () => {
              button.disabled = true;
              renderOfferForm(offers);
            });
            break;
        }
        button.addEventListener('click', () => {
          const all = document.querySelectorAll('.category__item');
          all.forEach((el) => {
            el.classList.remove('item_selected');
          });
          button.classList.add('item_selected');
        });
        categoryBlock.append(button);
      }


      searchField.append(searchInput, searchButton);
      searchBlock.append(searchTitle, searchField);
      main.append(searchBlock, categoryBlock, offers);
    }


    function clearContent(): void {
      main.textContent = '';
      user.textContent = '';
    }

    const split = document.createElement('img');
    split.className = 'nav__split';
    split.src = '../../assets/img/elements/split-horizontal.svg';

    mainPage.textContent = 'Główna';
    currentPage.textContent = 'Moje konto';

    siteNav.append(mainPage, dot, currentPage);

    const title = document.createElement('h2');
    const itemsList = document.createElement('div');

    title.className = 'nav__title';
    itemsList.className = 'nav__list';


    const itemsArr = [
      'Dane konta', 'Moje firmy', 'Moje zakupy', 'Moje oferty', 'Moje zamówenia', 'Moje dostawy', 'Wiadomości',
      'Rachunki', 'Usługi',
    ];

    title.textContent = 'Moje konto';

    title.addEventListener('click', () => {
      const allItems = document.querySelectorAll('.list__item');
      allItems.forEach((item) => {
        item.classList.remove('active');
      });
    });

    let itemsId = 0;

    itemsArr.forEach((el) => {

      const listItem = document.createElement('h2');
      listItem.className = 'list__item';
      listItem.textContent = el;
      listItem.id = itemsId.toString();
      itemsId += 1;
      listItem.addEventListener('click', () => {
        const allItems = document.querySelectorAll('.list__item');
        allItems.forEach((item) => {
          item.classList.remove('active');
        });
        listItem.classList.add('active');

        if (listItem.id === '0') {
          clearContent();
          renderMainDane();
          renderUserBlock();
        } else if (listItem.id === '1') {
          clearContent();
          renderFirmsBlock();
          renderUserBlock();
        } else if (listItem.id === '2') {
          clearContent();
          renderOrdersBlock();
        } else if (listItem.id === '3') {
          clearContent();
          renderOffersBlock();
        }

      });

      itemsList.append(listItem);
    });

    const logoutButton = document.createElement('button');
    logoutButton.classList.add('logout-button');
    logoutButton.textContent = 'Wyloguj się';
    logoutButton.onclick = () => {
      alert('Wylogowano');
      userLogout();
      window.location.hash = 'main-page';
    };
    navbar.appendChild(logoutButton);

    navbar.append(siteNav, split, title, itemsList);
    content.append(navbar, main, user);
    this.container.append(content);
  }


  render() {
    this.renderContent();
    this.container.append(this.footer.render());
    return this.container;
  }
}

export default AccountPage;
