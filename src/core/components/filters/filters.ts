import Component from '../../templates/components';
import { INITIAL_STATE } from '../../parameters/parameters';
import categoriesJSON from '../../../assets/json/_ProductsCategory.json';
import './filters.scss';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { parameters, parametersObj, saveParameters, loadParameters } from '../../parameters/parameters';
import { Material, Condition, EnumVAT, PaymentType, Enums, EnumLowerCase, DeliveryType,
} from '../../types/types';

export default class Filters extends Component {
  price: number[];

  public category: string[];

  public categoryCheckboxes: NodeListOf<HTMLInputElement> | null;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.category = parametersObj().category;
    this.categoryCheckboxes = null;
    this.price = INITIAL_STATE.price;
  }

  createFilterBlock(nameBlock: HTMLFormElement, name: string, container: HTMLElement) {
    nameBlock.classList.add(`${name}__form`);
    nameBlock.setAttribute('name', `${name}__form`);
    container.append(nameBlock);
  }

  createLegend(legend: HTMLElement, container: HTMLFormElement, innerText?: string) {
    legend.classList.add(`${container.name}__legend`);
    if (innerText)
      legend.innerText = innerText;
    container.append(legend);
  }

  createCheckbox(checkbox: HTMLInputElement, name: string, container: HTMLFormElement, nameNotTrim?: string): void {
    checkbox.classList.add(`${name}_checkbox`);
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `${name}`);
    checkbox.setAttribute('value', `${name}`);
    checkbox.setAttribute('name', `${name}`);
    checkbox.setAttribute('value', `${nameNotTrim}`);
    container.append(checkbox);
  }

  createCheckboxLabel(label: HTMLElement, checkbox: HTMLInputElement, text: string, container: HTMLFormElement): void {
    label.setAttribute('for', `${checkbox.name}`);
    label.textContent = text;
    container.append(label);
  }

  createInputMin(input: HTMLInputElement, name: string, container: HTMLFormElement) {
    input.classList.add(`${name}__input`);
    input.classList.add('filter__input');
    input.setAttribute('type', 'text');
    container.append(input);
  }

  createSliderBlock(nameBlock: HTMLFormElement, nameLegend: HTMLLegendElement,
    name: string, legendName: string, sliderMax: number) {
    this.createFilterBlock(nameBlock, name, this.container);
    this.createLegend(nameLegend, nameBlock, legendName);

    const minInput = document.createElement('input');
    minInput.classList.add(`${name}min__input`);
    minInput.setAttribute('type', 'text');
    minInput.classList.add('filter__input');

    const maxInput = document.createElement('input');
    maxInput.classList.add(`${name}max__input`);
    maxInput.setAttribute('type', 'text');
    maxInput.classList.add('filter__input');

    const inputs = [minInput, maxInput];

    const slider = document.createElement('div') as noUiSlider.target;
    slider.setAttribute('id', `${name}__slider`);
    slider.classList.add(`${name}__slider`);

    let min = 0;
    let max = sliderMax;

    if (parameters.get(`${name}`)) {
      const dashIndex: number = parameters.get(`${name}`)?.indexOf('-') as number;
      if (dashIndex) {
        min = Number(parameters.get(`${name}`)?.slice(0, dashIndex));
        max = Number(parameters.get(`${name}`)?.slice(dashIndex + 1));
      }
    }

    noUiSlider.create(slider, {
      start: [min, max],
      connect: true,
      range: {
        'min': 0,
        'max': sliderMax,
      },
      step: 1,
    });

    inputs.forEach((input, handle) => {
      input.addEventListener('change', () => {
        slider.noUiSlider?.setHandle(handle, input.value);
      });
    });

    if (slider.noUiSlider) {
      slider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle].toString();
        const sliderValues = slider.noUiSlider?.get() as string[];
        parameters.set(`${name}`, `${sliderValues[0]}-${sliderValues[1]}`);
        window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';
        parametersObj();
        saveParameters();
      });
    }

    nameBlock.append(nameLegend, minInput, maxInput, slider);
    this.container.append(nameBlock);
  }

  private lengthFilters(): void {
    const lengthBlock = document.createElement('form') as HTMLFormElement;
    const lengthLegend = document.createElement('legend');
    this.createSliderBlock(lengthBlock, lengthLegend, 'length', 'Długość, mm', 3000);
  }


  private priceFilters() {
    const priceBlock = document.createElement('form') as HTMLFormElement;
    const priceLegend = document.createElement('legend');
    this.createSliderBlock(priceBlock, priceLegend, 'price', 'Cena, netto', 500);
  }

  private widthFilters() {
    const widthBlock = document.createElement('form') as HTMLFormElement;
    const widthLegend = document.createElement('legend');
    this.createSliderBlock(widthBlock, widthLegend, 'width', 'Szerokość, mm', 2000);
  }

  private heightFilters() {
    const heightBlock = document.createElement('form') as HTMLFormElement;
    const heightLegend = document.createElement('legend');
    this.createSliderBlock(heightBlock, heightLegend, 'height', 'Wysokość, mm', 1200);
  }

  private loadFilters() {
    const loadBlock = document.createElement('form') as HTMLFormElement;
    const loadLegend = document.createElement('legend');
    this.createSliderBlock(loadBlock, loadLegend, 'load', 'Udźwig', 5000);
  }

  private quantityFilters() {
    const quantityBlock = document.createElement('form') as HTMLFormElement;
    const quantityLegend = document.createElement('legend');
    this.createSliderBlock(quantityBlock, quantityLegend, 'quantity', 'Iłość', 10000);
  }


  private stockFilter(): void {
    const stockBlock = document.createElement('form') as HTMLFormElement;
    this.createFilterBlock(stockBlock, 'stock', this.container);

    const stockLegend = document.createElement('legend');
    this.createLegend(stockLegend, stockBlock, 'Zapas');

    const stockCheckTrue = document.createElement('input') as HTMLInputElement;
    this.createCheckbox(stockCheckTrue, 'stock__true', stockBlock);
    const stockCheckLabel = document.createElement('label') as HTMLElement;
    this.createCheckboxLabel(stockCheckLabel, stockCheckTrue, 'Na stanie', stockBlock);

    const stockCheckFalse = document.createElement('input') as HTMLInputElement;
    this.createCheckbox(stockCheckFalse, 'stock__false', stockBlock);
    const stockCheckLabel2 = document.createElement('label') as HTMLElement;
    this.createCheckboxLabel(stockCheckLabel2, stockCheckFalse, 'Na zamówenie', stockBlock);

    function checkFalse(): void {
      if (stockCheckTrue.checked) {
        if (stockCheckFalse.checked)
          parameters.set('quantity', '0-100000');
        else parameters.set('quantity', '1-100000');
      } else parameters.set('quantity', '0-0');

      window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';
      parametersObj();
      saveParameters();
    }

    function checkTrue(): void {
      if (stockCheckFalse.checked) {
        if (stockCheckTrue.checked)
          parameters.set('quantity', '0-100000');
        else parameters.set('quantity', '0-0');
      } else parameters.set('quantity', '1-100000');

      window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';
      parametersObj();
      saveParameters();
    }

    if (parameters.get('quantity')?.includes('10000')) {
      if (parameters.get('quantity')?.includes('0-')) {
        stockCheckTrue.checked = true;
        stockCheckFalse.checked = true;
      } else {
        stockCheckTrue.checked = true;
        stockCheckFalse.checked = false;
      }
    } else {
      stockCheckTrue.checked = false;
      stockCheckFalse.checked = true;
    }

    stockCheckTrue.addEventListener('change', () => {
      checkTrue();
    });

    stockCheckFalse.addEventListener('change', () => {
      checkFalse();
    });
  }

  private categoriesFilter(): void {

    const categoriesBlock = document.createElement('form') as HTMLFormElement;
    categoriesBlock.classList.add('categories__form');
    categoriesBlock.setAttribute('name', 'categories__block');
    const categoryLegend = document.createElement('legend');
    categoryLegend.classList.add('categories__form__legend');
    categoryLegend.innerText = 'Kategorie';
    categoriesBlock.append(categoryLegend);

    for (let i = 0; i < categoriesJSON.length; i++) {
      const categoryName = (categoriesJSON[i].shortName);

      const categoryCheck = document.createElement('input') as HTMLInputElement;
      categoryCheck.classList.add('checkbox');
      categoryCheck.classList.add('category__checkbox');
      categoryCheck.setAttribute('type', 'checkbox');
      categoryCheck.setAttribute('id', `${categoryName}`);
      categoryCheck.setAttribute('value', `${categoryName}`);
      categoryCheck.setAttribute('name', `${categoryName}`);

      if (parametersObj().category.find(x => x === categoryCheck.value))
        categoryCheck.checked = true;

      const labelCategoryCheck = document.createElement('label');
      labelCategoryCheck.setAttribute('for', `${categoryName}`);
      labelCategoryCheck.textContent = `${categoriesJSON[i].name}`;

      categoriesBlock.append(categoryCheck, labelCategoryCheck);
      this.container.append(categoriesBlock);
    }
  }

  private categoryChange():void {
    this.categoryCheckboxes =
      this.container.querySelectorAll('.category__checkbox');
    if (this.categoryCheckboxes) {
      this.categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const a = [];
          if (this.categoryCheckboxes)
            for (let i = 0; i < this.categoryCheckboxes?.length; i += 1) {
              if (this.categoryCheckboxes[i].checked)
                a.push(this.categoryCheckboxes[i].value);
            }
          this.category = a;
          parameters.set('category', `${this.category.join(',')}`);
          window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';
          parametersObj();
          saveParameters();
        });
      });
    }
  }

  private createEnumCheckboxes(enumName: Enums, container: HTMLElement,
    parameter: EnumLowerCase, blockLegend?: string): void {

    const nameBlock = document.createElement('form') as HTMLFormElement;
    this.createFilterBlock(nameBlock, parameter, this.container);

    const nameLegend = document.createElement('legend');
    this.createLegend(nameLegend, nameBlock, blockLegend);

    for (const name of Object.values(enumName)) {
      const nameTrim = name.replace(/\s/g, '');
      const nameCheck = document.createElement('input') as HTMLInputElement;
      nameCheck.classList.add(`${parameter}__checkbox`);
      this.createCheckbox(nameCheck, nameTrim, nameBlock, name);

      const nameCheckLabel = document.createElement('label');
      this.createCheckboxLabel(nameCheckLabel, nameCheck, name, nameBlock);
      const arr = parametersObj()[`${parameter}`] as Array<string>;
      if (arr.find(x => x === nameCheck.value))
        nameCheck.checked = true;

    }

    const nameCheckboxes: NodeListOf<HTMLInputElement> | null =
        this.container.querySelectorAll(`.${parameter}__checkbox`);
    if (nameCheckboxes) {
      nameCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const a = [];
          if (nameCheckboxes)
            for (let i = 0; i < nameCheckboxes.length; i += 1) {
              if (nameCheckboxes[i].checked)
                a.push(nameCheckboxes[i].value);
            }
          parameters.set(parameter, a.join(','));
          window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';
          parametersObj();
          saveParameters();
        });
      });
    }
  }

  private resetFilters(): void {
    const resetBlock = document.createElement('form') as HTMLFormElement;
    resetBlock.classList.add('reset__form');
    resetBlock.setAttribute('name', 'reset__form');

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'reset');
    resetButton.setAttribute('name', 'resetButton');
    resetButton.classList.add('reset__form__button');
    resetButton.classList.add('button');
    resetButton.innerText = 'Reset';

    resetButton.addEventListener('click', () => {
      parameters.set('search', '');
      parametersObj('clear');
      saveParameters();
    });

    const copyButton = document.createElement('button');
    copyButton.setAttribute('type', 'button');
    copyButton.setAttribute('name', 'copyButton');
    copyButton.classList.add('reset__form__button');
    copyButton.classList.add('button');
    copyButton.innerText = 'Skopiuj';
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(document.location.href).then(() => {
        copyButton.innerText = 'Skopiowano';
      }, (err) => console.log('Copy error' + err));
    });

    resetBlock.append(resetButton, copyButton);
    this.container.append(resetBlock);
  }

  render(): HTMLElement {
    this.resetFilters();
    this.createEnumCheckboxes(EnumVAT, this.container, 'VAT', 'VAT');
    this.createEnumCheckboxes(PaymentType, this.container, 'payment', 'Płatność');
    this.createEnumCheckboxes(DeliveryType, this.container, 'deliveryType', 'Dostawa');
    this.loadFilters();
    this.heightFilters();
    this.widthFilters();
    this.lengthFilters();
    this.createEnumCheckboxes(Material, this.container, 'material', 'Material');
    this.createEnumCheckboxes(Condition, this.container, 'condition', 'Stan');
    // this.stockFilter();
    this.quantityFilters();
    this.categoriesFilter();
    this.categoryChange();
    this.priceFilters();

    window.location.hash = parameters ? `catalog-page?${parameters.toString()}` : 'catalog-page';
    parametersObj();
    saveParameters();
    loadParameters();

    return this.container;
  }
}

