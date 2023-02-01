import Page from '../../core/templates/page';

class CatalogPage extends Page {
  static TextObject = {
    MainTitle: 'Catalog Page',
  };

  render() {
    const title = this.createHeaderTitle(CatalogPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default CatalogPage;
