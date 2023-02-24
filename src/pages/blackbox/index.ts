import Page from '../../core/templates/page';
import './index.css';

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

    // const game =

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

      alert('Message sent!');
    });
  }



  render() {
    this.renderContent();
    return this.container;
  }
}

export default BlackBoxPage;
