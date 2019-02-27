import { lsTokenName } from './constants';
import { HttpHeaders } from '@angular/common/http';

export const getQuery = (obj: object): string => {
  let query = '';
  for (let key in obj) {
    query += `${key}=${obj[key]}&`;
  }
  return `?${query}`;
};
