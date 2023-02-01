import Component from '../../templates/components';
import { PageIds } from '../../../pages/app';

const Buttons = [
  {
    id: PageIds.Main_page,
    text: 'Main Page',
  },
  {
    id: PageIds.Catalog_page,
    text: 'Catalog Page',
  },
  {
    id: PageIds.Cart_page,
    text: 'Cart Page',
  },
  {
    id: PageIds.Account_page,
    text: 'Account Page',
  },
];

class Header extends Component {

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
