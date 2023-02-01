import Page from '../../core/templates/page';

class AccountPage extends Page {
  static TextObject = {
    MainTitle: 'Account Page',
  };

  render() {
    const title = this.createHeaderTitle(AccountPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default AccountPage;
