import Page from '../../core/templates/page';
import Footer from '../../core/components/footer';
import './index.css';
import { getAllProductCategories, getAllProducts } from '../../core/components/api/api';
import { IProductCategory, IProduct } from '../../core/types/types';

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

  private async renderCatalog(): Promise<void> {

    const productsMain = await getAllProducts() as IProduct[];

    const catalogBlock = document.createElement('div');
    catalogBlock.className = 'catalog-bar';

    const catalogTitle = document.createElement('h2');

    const catalogList = document.createElement('div');
    catalogList.className = 'catalog-list';

    productsMain.forEach((el) => {
      const catalogListItem = document.createElement('a');
      const itemBlock = document.createElement('div');
      const itemTitle = document.createElement('h3');
      const itemDesc = document.createElement('h3');
      itemTitle.innerText = el.name + '\n' + el.condition;
      // itemDesc.innerText = el.material;
      itemBlock.append(itemTitle, itemDesc);
      itemBlock.className = 'item-block';
      catalogListItem.append(itemBlock);
      catalogListItem.href = `#product-page/${el.shortName}`;
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
    const headButton2 = document.createElement('button');

    mainBody.className = 'main-body';
    mainBodyHead.className = 'body-head';
    headImg.className = 'head-img';
    headTitle.className = 'body-title';
    headDescr.className = 'body-description';
    headButton.className = 'body-button';
    headButton2.className = 'body-button2';

    // headTitle.innerText = 'Zamów palety latwiej\n (szybciej, taniej) niż kiedyś';

    headDescr.innerText = 'Tu usprawnisz procesy zakupu i\n wymiany palet. Dzięki naszej systemie\n zjednoczenia' +
      ' logistycznych kierunków\n możesz się nie martwić o niewystarczających\n ilości palet u obecnego dostawcy.' +
      ' Dopasujemy\n zamówienie zgodnie ze twoimi potrzebami na czas.';
    headButton.innerText = 'SPROBUJĘ!';
    headButton2.innerText = 'Nie, wybiorę sam';
    headImg.src = '../../assets/img/elements/main-pallet.png';

    mainBodyHead.append(headDescr, headButton, headButton2);
    mainBody.append(headImg, mainBodyHead);
    this.container.append(mainBody);

    headButton.addEventListener('click', () => window.location.href = '#blackbox-page');
    headButton2.addEventListener('click', () => window.location.href = '#catalog-page');
  }

  private async renderPaletMenu(): Promise<void> {

    const categoryMain = await getAllProductCategories() as IProductCategory[];

    categoryMain[0].class = 'up-left';
    categoryMain[1].class = 'down-left';
    categoryMain[2].class = 'up-right';
    categoryMain[3].class = 'down-right';
    categoryMain[4].class = 'center';
    const palety = document.createElement('div');
    palety.className = 'palety';

    categoryMain.forEach((el) => {
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

      if (el.class)
        paletItem.classList.add(el.class);
      if (el.shortName === 'Nadstawki') {
        paletImg.classList.add('center-image');
      }

      paletImg.src = el.image;
      paletTitle.innerText = el.name;
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
