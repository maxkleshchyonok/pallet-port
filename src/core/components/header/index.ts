import Component from '../../templates/components';
import AuthModal from '../auth-modal';


const Buttons = [
  {
    id: 'main-page',
    text: 'Main',
  },
  {
    id: 'catalog-page',
    text: 'Katalog',
  },
  {
    id: 'cart-page',
    text: 'Cart',
  },
  {
    id: 'account-page',
    text: 'Account',
  },
];

const HeaderInfo = [
  {
    id: 'location',
    text: 'MAZOWIECKIE',
    img: '../../assets/img/elements/location.svg',
  },
  {
    id: 'email',
    text: 'info@palletport.pl',
    img: '../../assets/img/elements/mail.svg',
  },
  {
    id: 'phone',
    text: '+48666666666',
    img: '../../assets/img/elements/phone.svg',
  },
  {
    id: 'account-page',
    text: 'Twoje konto',
    img: '../../assets/img/elements/konto-arrow.svg',
  },
];

class Header extends Component {

  // public priceNum: number | undefined = 0;


  private renderHeaderInfo(): void {
    const containerInfo = document.createElement('div');
    containerInfo.className = 'header-info';
    HeaderInfo.forEach(item => {
      const infoItem = document.createElement('div');
      const infoItemImg = document.createElement('img');
      const infoItemA = document.createElement('a');
      infoItem.className = `info-item ${item.id}`;
      infoItem.id = item.id;
      infoItemImg.src = item.img;
      infoItemA.href = '#';
      infoItemA.innerText = item.text;
      if (item.id === 'account-page') {
        infoItemA.id = 'personal-account';
        if (!localStorage.getItem('token')) {
          infoItemA.addEventListener('click', () => {
            const popUp = new AuthModal('div', 'modal');
            this.container.append(popUp.render());
          });
        } else {
          infoItemA.href = `#${Buttons[3].id}`;
        }
      }

      infoItem.append(infoItemImg, infoItemA);
      containerInfo.append(infoItem);
    });
    this.container.append(containerInfo);
  }


  public renderHeaderMain(): void {
    const containerMain = document.createElement('div');

    const logoBlock = document.createElement('a');
    const logo = document.createElement('img');

    const catalogBlock = document.createElement('a');
    const catalogImg = document.createElement('img');
    const catalogText = document.createElement('p');

    const cartBlock = document.createElement('a');
    const cartImg = document.createElement('img');
    const cartPrice = document.createElement('p');

    const sales = document.createElement('a');

    const searchBlock = document.createElement('div');
    const searchInput = document.createElement('input');
    const searchButton = document.createElement('button');

    const likeBlock = document.createElement('a');
    const likeImg = document.createElement('img');

    //logoBlock.id = Buttons[0].id as string;
    logoBlock.href = `#${Buttons[0].id}`;
    logoBlock.className = 'logo-block';
    logo.src = '../../assets/img/elements/palletport_logo_small.svg';
    containerMain.className = 'header-main';

    catalogBlock.href = `#${Buttons[1].id}`;
    catalogBlock.className = 'catalog-block';
    catalogImg.src = '../../assets/img/elements/catalog.svg';
    catalogText.innerText = Buttons[1].text;
    catalogText.className = 'catalog-block-text';
    catalogBlock.append(catalogImg, catalogText);

    sales.innerText = 'Wyprzedaż';
    sales.href = '#';
    sales.className = 'wyprzedaz';

    searchInput.type = 'text';
    searchInput.placeholder = 'Wpisz nazwę towaru';
    searchInput.className = 'input-field';
    searchButton.innerText = 'Szukaj';
    searchButton.className = 'input-button';
    searchBlock.className = 'search';
    searchBlock.append(searchInput, searchButton);


    likeImg.src = '../../assets/img/elements/like.svg';
    likeImg.className = 'like-image';
    likeBlock.append(likeImg);
    likeBlock.className = 'like-block';
    likeBlock.href = '#';


    cartImg.src = '../../assets/img/elements/cart.svg';
    // cartPrice.innerText = `${this.priceNum} zl (${arr.length})`;
    cartPrice.innerText = '0 zl';
    cartPrice.className = 'cart-price';
    cartBlock.href = `#${Buttons[2].id}`;
    cartBlock.className = 'cart-block';
    cartBlock.append(cartImg, cartPrice);

    logoBlock.append(logo);
    containerMain.append(logoBlock, catalogBlock, sales, searchBlock, likeBlock, cartBlock);
    this.container.append(containerMain);
  }

  render(): HTMLElement {
    this.renderHeaderInfo();
    this.renderHeaderMain();
    return this.container;
  }
}

export default Header;

