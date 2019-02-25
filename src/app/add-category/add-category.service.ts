import { httpOptions } from './../constants';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as config from '../../assets/config.json';

@Injectable()
export class AddCategoryService {
  constructor(private httClient: HttpClient) {}

  addCategory(category: Category): Observable<Category> {
    return this.httClient.post<Category>(
      config.API.CATEGORY_POST,
      category,
      httpOptions,
    );
  }
}
