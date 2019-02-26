import { lsTokenName } from './constants';
import { HttpHeaders } from '@angular/common/http';

export const getQuery = (obj: object): string => {
  let query = '';
  for (let key in obj) {
    query += `${key}=${obj[key]}&`;
  }
  return `?${query}`;
};

export const getHttpOptions = () => {
  const {
    token: { accessToken },
  } = JSON.parse(localStorage.getItem(lsTokenName));
  return {
    headers: new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }),
  };
};
