import { LoginData, OfferStatus } from '../../types/types';
import { IOffer } from '../../types/types';

const BACKEND_URL = 'http://localhost:5300/api';

export async function fetchLogin(data: LoginData, url: string) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('token', result.token);
    });
}


export async function getOffersByStatus(status: OfferStatus): Promise<IOffer[] | void> {
  return fetch(`${BACKEND_URL}/offers/find/findByStatus?status=${status}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}


