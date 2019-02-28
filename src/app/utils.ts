import { FormGroup } from '@angular/forms';
import { lsTokenName } from './constants';
import { HttpHeaders } from '@angular/common/http';

export const getQuery = (obj: object): string => {
  let query = '';
  for (let key in obj) {
    query += `${key}=${obj[key]}&`;
  }
  return `?${query}`;
};

export const checkValidFormGroup = (formGroup: FormGroup) => {
  return (formControlName: string): boolean => {
    const { touched, invalid } = formGroup.get(formControlName);

    return touched && invalid;
  };
};
