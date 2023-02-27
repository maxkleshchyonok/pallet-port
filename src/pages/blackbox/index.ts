import Page from '../../core/templates/page';
// import { IOffer, User } from '../../core/types/types';
import './index.scss';


// const requestOptions: RequestInit = {
//   // method: 'GET',
//   // redirect: 'follow',
//   // mode: 'no-cors',
//   // credentials: 'same-origin',
//   // credentials: 'include',
// };

// export const getOffers = async (): Promise<Array<IOffer>> => {
//   // return (await fetch('../../assets/json/test.json')).json();
//   return (await fetch('http://localhost:5300/api/offers/find/findByStatus?status=ACTIVE', requestOptions)).json();

// };

class BlackBoxPage extends Page {
  static TextObject = {
    MainTitle: 'BlackBox Page',
  };

  createLegend(legend: HTMLElement, container: HTMLElement, innerText?: string) {
    legend.classList.add('legend');
    if (innerText)
      legend.innerText = innerText;
    container.append(legend);
  }

  private renderContent(): void {
    const content = document.createElement('div');
    const navbar = document.createElement('div');
    const main = document.createElement('div');

    const bbText = document.createElement('legend');
    this.createLegend(bbText, navbar, `Skorzystaj z usług naszej sztucznej inteligencji ppAI, który pomoże Ci złożyć
      zamówenie na palety, opierając się na dane, które podasz mu w dowolnem formacie. Spróbuj technologię przyslości
      i pozbądż się klopotów na zawsze.`);
    const bbLink = document.createElement('a');
    this.createLegend(bbLink, navbar, 'Więcej informacji znajdziesz na stronie: "O ppAI"');
    bbLink.href = '/o-ppAI';


    const searchBlock = document.createElement('div');
    const searchInput = document.createElement('input');
    const searchButton = document.createElement('button');

    searchInput.type = 'text';
    searchInput.placeholder = 'Pisz co chcesz!';
    searchInput.className = 'input-field';
    searchButton.className = 'input-button';
    searchButton.innerText = 'Wyślij';
    searchBlock.className = 'search';
    searchBlock.append(searchInput, searchButton);

    navbar.append(searchBlock);

    content.append(navbar, main);
    this.container.append(content);

    searchButton.addEventListener('click', function (e) {
      e.preventDefault();

      const message = searchInput.value;

      const token = '5270962336:AAFTy1xhsG3GSpILaEOAWKziybfjNfLRz8U';
      const chatId = -1001845861157;
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

      const oReq = new XMLHttpRequest();
      oReq.open('GET', url, true);
      oReq.send();



      // alert('Message sent!');

    });

    const spinnerWrapper = document.createElement('div');
    spinnerWrapper.className = 'spinner-wrapper';
    const spinner = document.createElement('div');
    spinner.className = 'spinner';

    spinnerWrapper.appendChild(spinner);
    navbar.appendChild(spinnerWrapper);

    const presentation = document.createElement('div');
    // eslint-disable-next-line max-len
    presentation.innerHTML = '<iframe src="https://www.slideshare.net/slideshow/embed_code/key/qFllHHQ7F9FEYg?hostedIn=slideshare&page=upload" width="900" height="570" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>';
    navbar.append(presentation);




  }



  render() {
    this.renderContent();
    return this.container;
  }
}

export default BlackBoxPage;
