import { getQuery } from '../utils';
import { map } from 'rxjs/operators';
import { CategorySearch } from './category-search';
import { AddArticle } from './add-article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../assets/config.json';
import { httpOptions } from '../constants';
import { Observable, from } from 'rxjs';

@Injectable()
export class AddArticleService {
  constructor(private httpClient: HttpClient) {}

  addArticle(article: AddArticle): Observable<AddArticle> {
    return this.httpClient.post<AddArticle>(
      config.API.ARTICLE_POST,
      article,
      httpOptions,
    );
  }

  updateArticle(id: string, article: AddArticle): Observable<AddArticle> {
    return this.httpClient.put<AddArticle>(
      `${config.API.ARTICLE_PUT}/${id}`,
      article,
      httpOptions,
    );
  }

  getArticleById(id: string): Observable<AddArticle> {
    return this.httpClient.get<AddArticle>(`${config.API.ARTICLE_GET}/${id}`);
  }

  getCategories(search: string): Observable<CategorySearch[]> {
    return this.httpClient
      .get<CategorySearch[]>(
        config.API.CATEGORY_GET + getQuery({ search, limit: 10 }),
      )
      .pipe(
        map(categories => categories.map(({ _id, name }) => ({ _id, name }))),
      );
  }
}
