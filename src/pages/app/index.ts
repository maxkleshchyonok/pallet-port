import MainPage from '../main';
import CatalogPage from '../catalog';
import Page from '../../core/templates/page';
import CartPage from '../cart';
import Header from '../../core/components/header';
import ProductPage from '../product-page';
// import Footer from '../../core/components/footer';
import { loadParameters, parametersObj, saveParameters } from '../../core/parameters/parameters';
// import createProductCard from '../../core/components/product_card/product_card';
import productsJSON from '../../assets/json/_ProductsArray.json';
// import offersJSON from '../../assets/json/_OffersArray.json';
//import Product from '../../core/components/product/product';
import ErrorPage from '../error';
import AccountPage from '../account';
import BlackBoxPage from '../blackbox';
// import { getAllProducts } from '../../core/components/api/api';
// import { IProduct } from '../../core/types/types';


const productsId: string[] = productsJSON.map(product => product.shortName);

// async function createShortNameArr() {
//   const products = await getAllProducts() as IProduct[];
//   products.forEach((product) => {
//     productsId.push(`product-page/${product.shortName}`);
//   });
// }

// createShortNameArr();


export const PageIds: { [props: string]: string | string[] } = {
  MainPageId: 'main-page',
  CatalogPageId:'catalog-page',
  CartPageId: 'cart-page',
  ErrorPage: 'error-page',
  AccountPageId: 'account-page',
  ProductPageId: productsId,
  BlackBoxPageId: 'blackbox-page',
};

class App {
  static container: HTMLElement | null = document.getElementById('content');

  static defaultPageId = 'catalog-page';

  private initialPage: MainPage;

  private header: Header;

  previousPage = '';





  setPreviousPage(): void {
    localStorage.removeItem('previousPage');
    localStorage.setItem('previousPage', this.previousPage);
  }

  getPreviousPage(): void {
    this.previousPage = localStorage.getItem('previousPage') as string;
  }

  public renderNewPage(idPage: string) {
    const currentPageHTML = document.getElementById(App.defaultPageId);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null;
    if (idPage === PageIds.MainPageId) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.CatalogPageId) {
      page = new CatalogPage(idPage);
    } else if (idPage === PageIds.CartPageId) {
      page = new CartPage(idPage);
    } else if (idPage === PageIds.AccountPageId) {
      page = new AccountPage(idPage);
    } else if (idPage === PageIds.BlackBoxPageId) {
      page = new BlackBoxPage(idPage);
    } else if (PageIds.ProductPageId.includes(idPage)) {
      const shortName = idPage.split('/')[1];
      const product = productsId.find((el) => el === idPage);
      if (product !== undefined) {
        parametersObj(shortName);
        saveParameters();
        page = new ProductPage(idPage);
      } else {
        page = new ErrorPage(idPage, '404');
      }
    } else {
      page = new ErrorPage(idPage, '404');
    }

    if (page) {
      if (localStorage.getItem('previousPage'))
        this.getPreviousPage();
      else
        this.previousPage = window.location.hash;
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container?.append(pageHTML);
      this.setPreviousPage();

      // this.previousPage = window.location.hash.slice(1);
      // const pageHTML = page.render();
      // pageHTML.id = App.defaultPageId;
      // App.container?.append(pageHTML);
    }
  }

  private enableRouteChange() {
    const loadPage = () => {
      const hash = window.location.hash.slice(1);
      loadParameters();
      if (!hash) {
        window.location.hash = 'main-page';
      }
      if (!hash.includes('?')) {
        this.renderNewPage(hash);
      } else {
        if (this.previousPage.slice(0, hash.indexOf('?')) === hash.slice(0, hash.indexOf('?'))) {
          setTimeout(() => {}, 1);
        } else {
          this.renderNewPage(`${hash.slice(0, hash.indexOf('?'))}`);
        }
      }

    };
    window.addEventListener('hashchange', () => {
      if (window.location.hash.includes('?') && !this.previousPage[this.previousPage.length - 1].includes('catalog')) {
        this.renderNewPage('catalog-page');
      } else
        loadPage();
    });
    window.addEventListener('load', () => {
      loadPage();
    });
  }


  constructor() {
    this.header = new Header('header', 'header-container');
    this.initialPage = new MainPage('main-page');
    // this.footer = new Footer('footer', 'footer-container');
  }

  run() {
    App.container?.append(this.header.render());
    if (localStorage.getItem('previousPage')) {
      // this.getPreviousPage();
      this.renderNewPage(this.previousPage);
    } else
      this.renderNewPage('main-page');
    this.enableRouteChange();
    // App.container?.append(this.footer.render());
  }
}

export default App;
