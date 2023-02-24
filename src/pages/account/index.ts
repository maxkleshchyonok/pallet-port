import Page from '../../core/templates/page';
import './index.css';

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

      daneBlock.className = 'dane';
      address.className = 'address';
      addressWys.className = 'wysylka';
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

      avatarBlock.className = 'user__avatar';
      avatar.className = 'avatar__image';
      editAvatar.className = 'avatar__edit';
      roles.className = 'user__roles';
      rolesTitle.className = 'roles__title';
      ratingBlock.className = 'user__rating';
      ratingTitle.className = 'rating__title';
      ratingNumber.className = 'rating__number';
      saveButton.className = 'user__saveButton';

      avatar.src = '../../assets/img/elements/account-user.svg';
      editAvatar.src = '../../assets/img/elements/edit-avatar.svg';
      rolesTitle.textContent = 'Moje role';
      ratingTitle.textContent = 'Moja ocena';
      ratingNumber.textContent = '5';

      saveButton.textContent = 'Zapisz';

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
      user.append(avatarBlock, roles, ratingBlock, saveButton);

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
        renderMainDane();
        renderUserBlock();
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
