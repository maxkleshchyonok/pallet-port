import { LoginData, OfferStatus, Order } from '../../types/types';
import { IOffer, IProductCategory, IProduct, User } from '../../types/types';

// const BACKEND_URL = 'https://ppback.onrender.com/api';

const BACKEND_URL = 'https://express-hello-world-production-0fc2.up.railway.app/api';

// const BACKEND_URL = 'http://localhost:5300/api';

export async function getUserByEmail(email: string | null): Promise<User> {
  return fetch(`${BACKEND_URL}/users/find/getByEmail?email=${email}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export async function userLogin(data: LoginData): Promise<{ token: string } | string> {
  return fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => result);
  //   localStorage.setItem('token', result.token);
  // });
}

export async function userRegister(data: LoginData) {
  await fetch(`${BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(result => {
      alert(result);
      console.log(result);
    })
    .catch(error => console.log('error', error));
}

export async function userLogout() {
  await fetch(`${BACKEND_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      localStorage.removeItem('token');
    });
}

export async function getAllProductCategories(): Promise<IProductCategory[] | void> {
  return fetch(`${BACKEND_URL}/productCategories`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export async function getAllProducts(): Promise<IProduct[] | void> {
  return fetch(`${BACKEND_URL}/products`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export async function getOffersByStatus(status: OfferStatus): Promise<IOffer[] | void> {
  return fetch(`${BACKEND_URL}/offers/find/findByStatus?status=${status}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}

export async function orderCreate(data: Order) {
  let token;
  if (localStorage.getItem('token')) {
    token = localStorage.getItem('token');
  }
  await fetch(`${BACKEND_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(result => {
      //alert(result);
      console.log(result);
    })
    .catch(error => console.log('error', error));
}

export async function getOrdersByUser(): Promise<Order[]> {
  return fetch(`${BACKEND_URL}/orders/find/findByUser?email=${localStorage.getItem('email')}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}
