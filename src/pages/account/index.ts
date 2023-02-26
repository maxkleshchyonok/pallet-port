import Page from '../../core/templates/page';
import './index.css';

const respondFromServer = [
  {
    'cart': {
      'user': {
        'deliveryAddress': {
          'street': 'string',
          'city': 'string',
          'zipCode': 'string',
          'state': 'string',
          'countryCode': 'string',
        },
        'paymentAddress': {
          'street': 'string',
          'city': 'string',
          'zipCode': 'string',
          'state': 'string',
          'countryCode': 'string',
        },
        'name': 'Jan Kowalski',
        'email': 'jan@gmail.com',
        'password': 'string',
        'phone': '48123456789',
        'rank': 4.5,
        'avatar': '/assets/avatars/jan.jpg',
        'roles': [
          'BUYER',
        ],
        'companies': [
          {
            'address': {
              'street': 'string',
              'city': 'string',
              'zipCode': 'string',
              'state': 'string',
              'countryCode': 'string',
            },
            'name': 'Roga i kopyta Sp. z o.o.',
            'NIP': '1234567890',
            'IBAN': 'stringstringstringstringst',
            'paymentDate': 30,
            'VAT': '23',
            'email': 'jan@gmail.com',
            'phone': '48123456789',
            'workingHourMin': 24,
            'workingHourMax': 24,
            '_id': '63f7b5715da65be6e956f2cb',
          },
        ],
      },
      'offers': [
        {
          'offer': {
            'product': {
              'category': {
                'name': 'Palety drewniane',
                'description': 'Palety drewniane bardzo dobre',
                'image': 'https://cdn.shopify.com/s/files/1/0029/7477/7411/products/31_1024x1024.jpg?v=1559927418',
                'shortName': 'palety_drewniane',
              },
              'name': 'Paleta drewniana 1200*800',
              'material': 'METAL',
              'condition': 'NEW',
              'description': 'Palety drewniane bardzo dobre',
              'image1': 'https://cdn.shopify.com/s/files/1/0029/7477/7411/products/31_1024x1024.jpg?v=1559927418',
              'image2': '/assets/img/product/paleta_drewinana_1200800_2.jpg',
              'shortName': 'paleta_drewniana',
              'length': '0',
              'width': '0',
              'height': '0',
              'maxLoad': '0',
            },
            'seller': {
              'deliveryAddress': {
                'street': 'string',
                'city': 'string',
                'zipCode': 'string',
                'state': 'string',
                'countryCode': 'string',
              },
              'paymentAddress': {
                'street': 'string',
                'city': 'string',
                'zipCode': 'string',
                'state': 'string',
                'countryCode': 'string',
              },
              'name': 'Jan Kowalski',
              'email': 'jan@gmail.com',
              'password': 'string',
              'phone': '48123456789',
              'rank': 4.5,
              'avatar': '/assets/avatars/jan.jpg',
              'roles': [
                'BUYER',
              ],
              'companies': [
                {
                  'address': {
                    'street': 'string',
                    'city': 'string',
                    'zipCode': 'string',
                    'state': 'string',
                    'countryCode': 'string',
                  },
                  'name': 'Roga i kopyta Sp. z o.o.',
                  'NIP': '1234567890',
                  'IBAN': 'stringstringstringstringst',
                  'paymentDate': 30,
                  'VAT': '23',
                  'email': 'jan@gmail.com',
                  'phone': '48123456789',
                  'workingHourMin': 24,
                  'workingHourMax': 24,
                  '_id': '63f7b5715da65be6e956f2cd',
                },
              ],
            },
            'company': {
              'address': {
                'street': 'string',
                'city': 'string',
                'zipCode': 'string',
                'state': 'string',
                'countryCode': 'string',
              },
              'name': 'Roga i kopyta Sp. z o.o.',
              'NIP': '1234567890',
              'IBAN': 'stringstringstringstringst',
              'paymentDate': 30,
              'VAT': '23',
              'email': 'jan@gmail.com',
              'phone': '48123456789',
              'workingHourMin': 24,
              'workingHourMax': 24,
            },
            'price': 25.2,
            'quantityMin': 100000,
            'quantityMax': 100000,
            'delivery': [
              {
                'deliveryTimeMin': 366,
                'deliveryTimeMax': 366,
                'deliveryPrice': 255.6,
                '_id': '63f7b5715da65be6e956f2ce',
                'deliveryType': 'BUS',
              },
            ],
            'image1': '/assets/img/product/paleta_drewinana_1200800_1.jpg',
            'image2': '/assets/img/product/paleta_drewinana_1200800_2.jpg',
            'description': 'Moje palety najlepsze!',
            'offerStatus': 'ACTIVE',
            'rating': 0,
            'isTop': true,
          },
          'delivery': {
            'deliveryTimeMin': 366,
            'deliveryTimeMax': 366,
            'deliveryPrice': 255.6,
            'deliveryType': 'BUS',
          },
          'quantity': 2,
          '_id': '63f7b5715da65be6e956f2cc',
        },
      ],
    },
    '_id': '63f7b5715da65be6e956f2ca',
    'status': 'CREATED',
    'payment': 'CASH',
    'paymentStatus': false,
    '__v': 0,
  },
];

class AccountPage extends Page {
  static TextObject = {
    MainTitle: 'Account Page',
  };

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
        item.cart.offers.forEach((el) => {
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
        }

      });

      itemsList.append(listItem);
    });


    navbar.append(siteNav, split, title, itemsList);
    content.append(navbar, main, user);
    this.container.append(content);
  }


  render() {
    this.renderContent();
    return this.container;
  }
}

export default AccountPage;
