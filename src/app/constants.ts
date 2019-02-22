import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export const CATEGORY_SEARCH_LIMIN = 10;
export const SEARCH_DEBOUNCE_TIME = 500;
