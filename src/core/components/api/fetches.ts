import { LoginData } from '../../types/types';

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
