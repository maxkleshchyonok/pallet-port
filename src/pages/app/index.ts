import Page from '../../core/templates/page';
import MainPage from '../main';
import Header from '../../core/components/header';
import ErrorPage, { ErrorTypes } from '../error';
import CatalogPage from '../catalog';
import CartPage from '../cart';
import AccountPage from '../account';

export const enum PageIds {
  Main_page = 'main-page',
  Catalog_page = 'catalog-page',
  Cart_page = 'cart-page',
  Account_page = 'account-page',
}

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'main-page';

  private header: Header;


  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.Main_page) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.Catalog_page) {
      page = new CatalogPage(idPage);
    } else if (idPage === PageIds.Cart_page) {
      page = new CartPage(idPage);
    } else if (idPage === PageIds.Account_page) {
      page = new AccountPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }


  constructor() {
    this.header = new Header('header', 'header-container');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;
