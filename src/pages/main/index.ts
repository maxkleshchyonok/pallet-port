import Page from '../../core/templates/page';
import Footer from '../../core/components/footer';
import './index.css';

const CatalogMain = [
  {
    id: 0,
    name: 'Paleta Euro 1200*800 nowa',
  },
  {
    id: 1,
    short: 'euro_used_1',
    name: 'Paleta Euro 1200*800 używana 1 gatunek',
  },
  {
    id: 2,
    short: 'euro_used_2',
    name: 'Paleta Euro 1200*800 używana 2 gatunek',
  },
  {
    id: 3,
    short: 'euro_used_3',
    name: 'Paleta Euro 1200*800 używana 3 gatunek',
  },
  {
    id: 4,
    short: 'europod_new',
    name: 'Paleta europodobna 1200*800 nowa',
  },
  {
    id: 5,
    short: 'europod_used',
    name: 'Paleta europodobna 1200*800 używana',
  },
  {
    id: 6,
    short: 'jedno_new_1',
    name: 'Paleta jednorazowa 1200*800 nowa',
  },
  {
    id: 7,
    short: 'jedno_new_2',
    name: 'Paleta jednorazowa 1200*800 lekka nowa',
  },
  {
    id: 8,
    short: 'jedno_used_1',
    name: 'Paleta jednorazowa 1200*800 używana 1 gatunek',
  },
  {
    id: 9,
    short: 'jedno_used_2',
    name: 'Paleta jednorazowa 1200*800 używana 2 gatunek',
  },
  {
    id: 10,
    short: 'jedno_used_3',
    name: 'Paleta jednorazowa 1200*800 lekka używana',
  },
  {
    id: 11,
    short: 'przem_1',
    name: 'Paleta przemysłowa 1200*1000 używana',
  },
  {
    id: 12,
    short: 'przem_2',
    name: 'Paleta przemysłowa 1200*1200 używana',
  },
  {
    id: 13,
    short: 'polpal_1',
    name: 'Półpaleta 800*600 nowa',
  },
  {
    id: 14,
    short: 'polpal_2',
    name: 'Półpaleta 800*600 używana',
  },
  {
    id: 15,
    short: 'plastik_1',
    name: 'Paleta H1 1200*800 higieniczna używana',
  },
  {
    id: 16,
    short: 'plastik_2',
    name: 'Paleta 1200*800 eksportowa używana',
  },
  {
    id: 17,
    short: 'tektur_1',
    name: 'Paleta 1200*800 tekturowa nowa',
  },
  {
    id: 18,
    short: 'nadstawka_1',
    name: 'Nadstawka 1200*800 drewniana nowa',
  },
  {
    id: 19,
    short: 'nadstawka_2',
    name: 'Skrzynia z zabudową 1200*800 OSB nowa',
  },
  {
    id: 19,
    short: 'nadstawka_3',
    name: 'Skrzynia z zabudową 1200*800 OSB używana',
  },
];


const PaletyMain = [
  {
    title: 'Palety EURO',
    description: '3 rodzaje',
    img: '../../assets/img/palety/palet-euro.png',
    class: 'up-left',
  },
  {
    title: 'Palety jednorazowe',
    description: '5 rodzaje',
    img: '../../assets/img/palety/palet-jed.png',
    class: 'down-left',
  },
  {
    title: 'Nadstawki',
    description: '1 rodzaj',
    img: '../../assets/img/palety/nadst.png',
    class: 'center',
  },
  {
    title: 'Półpalety',
    description: '3 rodzaje',
    img: '../../assets/img/palety/polpalet.png',
    class: 'up-right',
  },
  {
    title: 'Palety plastikowe',
    description: '5 rodzaje',
    img: '../../assets/img/palety/pal-plast.png',
    class: 'down-right',
  },
];

class MainPage extends Page {

  private footer: Footer;

  static TextObject = {
    MainTitle: 'Main page111',
  };

  constructor(id: string) {
    super(id);
    this.footer = new Footer('footer', 'footer-container');
  }

  createBlock(nameBlock: HTMLElement, name: string, container: HTMLElement, innerText?: string) {
    nameBlock.classList.add(`${name}`);
    if (innerText)
      nameBlock.innerText = innerText;
    container.append(nameBlock);
  }


  private renderCatalog(): void {
    const catalogBlock = document.createElement('div');
    catalogBlock.className = 'catalog-bar';

    const catalogTitle = document.createElement('h2');

    const catalogList = document.createElement('div');
    catalogList.className = 'catalog-list';

    CatalogMain.forEach((el) => {
      const catalogListItem = document.createElement('a');
      const itemBlock = document.createElement('div');
      const itemTitle = document.createElement('h3');
      const itemDesc = document.createElement('h3');
      itemTitle.innerText = el.name;
      // itemDesc.innerText = el.material;
      itemBlock.append(itemTitle, itemDesc);
      itemBlock.className = 'item-block';
      catalogListItem.append(itemBlock);
      catalogListItem.href = `#product-page/${el.id}`;
      catalogListItem.className = 'catalog-item';
      catalogList.append(catalogListItem);
    });
    catalogTitle.innerText = 'Katalog';
    catalogTitle.className = 'catalog-title';
    catalogBlock.append(catalogTitle, catalogList);
    // this.container.className = 'main-page';
    this.container.append(catalogBlock);
  }

  private renderMainBody(): void {
    const mainBody = document.createElement('div');
    const mainBodyHead = document.createElement('div');
    const headImg = document.createElement('img');
    // const headTitle = document.createElement('h1');
    const headTitle = document.createElement('h1');
    this.createBlock(headTitle, 'title', mainBodyHead);
    const headTitle1 = document.createElement('div');
    this.createBlock(headTitle1, 'title__top-string', headTitle, 'Zamów palety');
    // this.createBlock(headTitle, 'title', mainBodyHead);
    const headTitle15 = document.createElement('div');
    this.createBlock(headTitle15, 'title__middle-string', headTitle, ' ');
    const message = document.createElement('div');
    this.createBlock(message, 'title__message', headTitle);
    const message1 = document.createElement('div');
    this.createBlock(message1, 'word1', message, 'szybciej');
    const message2 = document.createElement('div');
    this.createBlock(message2, 'word2', message, 'łatwiej');
    const message3 = document.createElement('div');
    this.createBlock(message3, 'word3', message, 'taniej');
    const headTitle2 = document.createElement('div');
    this.createBlock(headTitle2, 'title__bottom-string', headTitle, 'niż kiedyś');

    const headDescr = document.createElement('h2');
    const headButton = document.createElement('button');

    mainBody.className = 'main-body';
    mainBodyHead.className = 'body-head';
    headImg.className = 'head-img';
    headTitle.className = 'body-title';
    headDescr.className = 'body-description';
    headButton.className = 'body-button';

    // headTitle.innerText = 'Zamów palety latwiej\n (szybciej, taniej) niż kiedyś';

    headDescr.innerText = 'Tu usprawnisz procesy zakupu i\n wymiany palet. Dzięki naszej systemie\n zjednoczenia' +
      ' logistycznych kierunków\n możesz się nie martwić o niewystarczających\n ilości palet u obecnego dostawcy.' +
      ' Dopasujemy\n zamówienie zgodnie ze twoimi potrzebami na czas.';
    headButton.innerText = 'SPROBUJĘ!';
    headImg.src = '../../assets/img/elements/main-pallet.png';

    mainBodyHead.append(headDescr, headButton);
    mainBody.append(headImg, mainBodyHead);
    this.container.append(mainBody);
  }

  private renderPaletMenu(): void {
    const palety = document.createElement('div');
    palety.className = 'palety';

    PaletyMain.forEach((el) => {
      const paletItem = document.createElement('div');
      const paletInfo = document.createElement('div');
      const paletTitle = document.createElement('h3');
      const paletDescript = document.createElement('h4');
      const paletImg = document.createElement('img');

      paletItem.className = 'palet-item';
      paletInfo.className = 'item-info';
      paletTitle.className = 'item-title';
      paletDescript.className = 'item-descript';
      paletImg.className = 'item-img';

      paletItem.classList.add(el.class);
      if (el.title === 'Nadstawki') {
        paletImg.classList.add('center-image');
      }

      paletImg.src = el.img;
      paletTitle.innerText = el.title;
      paletDescript.innerText = el.description;
      paletInfo.append(paletTitle, paletDescript);
      paletItem.append(paletInfo, paletImg);
      palety.append(paletItem);
    });
    this.container.append(palety);
  }

  render() {
    this.renderCatalog();
    this.renderMainBody();
    this.renderPaletMenu();
    this.container.classList.add('main-page-styles');
    this.container.append(this.footer.render());
    return this.container;
  }
}

export default MainPage;
