import { HttpHeaders } from '@angular/common/http';

export const lsTokenName = 'currentUser';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export const CATEGORY_SEARCH_LIMIN = 10;
export const SEARCH_DEBOUNCE_TIME = 500;
export const DEFAULT_IMAGE =
  'https://www.outbacktoystore.com/c.769029/RTE%20Site/TT_SB2_Files/img/default-img.png';
