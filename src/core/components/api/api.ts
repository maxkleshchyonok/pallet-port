import { LoginData, OfferStatus } from '../../types/types';
import { IOffer } from '../../types/types';

const BACKEND_URL = 'http://localhost:5300/api';

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

export async function getA;;



export async function getOffersByStatus(status: OfferStatus): Promise<IOffer[] | void> {
  return fetch(`${BACKEND_URL}/offers/find/findByStatus?status=${status}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}


