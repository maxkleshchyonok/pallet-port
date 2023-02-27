import Component from '../../templates/components';
import './index.css';
import { LoginData } from '../../types/types';
import { fetchLogin } from '../api/fetches';

class AuthModal extends Component {

  private form = document.createElement('form');

  private login = document.createElement('div');

  private emailInput = document.createElement('input');

  private emailLabel = document.createElement('label');

  private password = document.createElement('div');

  private passwordInput = document.createElement('input');

  private passwordLabel = document.createElement('label');

  private button = document.createElement('button');

  private data: LoginData = {
    email: '',
    password: '',
  };

  private renderModal(): void {
    const header = document.createElement('div');
    const logIn = document.createElement('h1');
    const register = document.createElement('h1');
    const close = document.createElement('div');


    this.form.className = 'form';
    this.login.className = 'form__login';
    this.emailInput.className = 'login__input';
    this.emailLabel.className = 'login__label';
    this.password.className = 'form__password';
    this.passwordInput.className = 'password__input';
    this.passwordLabel.className = 'password__label';
    this.button.className = 'form__button';
    close.className = 'form__close';

    this.emailInput.type = 'email';
    this.emailInput.id = 'email';
    this.emailInput.required = true;
    this.emailLabel.textContent = 'Email';

    this.passwordInput.type = 'password';
    this.passwordInput.id = 'password';
    this.passwordInput.required = true;
    this.passwordLabel.textContent = 'Hasło';


    this.emailInput.addEventListener('input', () => {
      this.data.email = this.emailInput.value;
      console.log(this.emailInput.value);
    });
    this.passwordInput.addEventListener('input', () => {
      this.data.password = this.passwordInput.value;
    });
    this.button.textContent = 'Wysłać';
    this.button.addEventListener('click', () => {
      console.log(this.data);
      const url = 'http://localhost:5300/api/auth/login';
      fetchLogin(this.data, url);
      this.closeModal();
    });



    close.textContent = 'X';

    header.className = 'modal__header';
    logIn.className = 'modal__title active';
    register.className = 'modal__title';

    logIn.textContent = 'Zaloguj sie';
    register.textContent = 'Rejestr';

    logIn.addEventListener('click', () => {
      logIn.classList.add('active');
      register.classList.remove('active');
      const confirmPassword = document.querySelector('.confirm');
      confirmPassword?.remove();
      this.renderLogIn();
    });

    register.addEventListener('click', () => {
      register.classList.add('active');
      logIn.classList.remove('active');
      this.renderRegister();
    });

    close.addEventListener('click', () => {
      this.closeModal();
    });

    header.append(logIn, register, close);
    this.container.append(header);
  }

  private renderLogIn(): void {
    this.login.append(this.emailLabel, this.emailInput);
    this.password.append(this.passwordLabel, this.passwordInput);
    this.form.append(this.login, this.password, this.button);
    this.container.append(this.form);
  }

  private renderRegister(): void {
    const confirmPassword = document.createElement('div');
    const password = document.createElement('input');
    const label = document.createElement('label');

    confirmPassword.className = 'form__password';
    confirmPassword.classList.add('confirm');
    password.className = 'password__input';
    label.className = 'password__label';

    password.type = 'password';
    password.id = 'password';
    password.required = true;
    label.textContent = 'Potwierdź hasło';

    this.button.disabled = true;

    password.addEventListener('input', () => {
      if (password.value === this.data.password) {
        this.button.disabled = false;
        this.button.textContent = 'Wysłać';
      } else {
        this.button.disabled = true;
        this.button.textContent = 'Różne hasła';
      }
    });


    this.button.addEventListener('click', () => {
      console.log(this.data);
      const url = 'http://localhost:5300/api/auth/register';
      fetchLogin(this.data, url);
      this.closeModal();
    });

    confirmPassword.append(label, password);
    this.login.append(this.emailLabel, this.emailInput);
    this.password.append(this.passwordLabel, this.passwordInput);
    this.form.append(this.login, this.password, confirmPassword, this.button);
    this.container.append(this.form);
  }

  private closeModal(): void {
    this.container.remove();
  }

  render(): HTMLElement {
    this.renderModal();
    this.renderLogIn();
    return this.container;
  }
}

export default AuthModal;
