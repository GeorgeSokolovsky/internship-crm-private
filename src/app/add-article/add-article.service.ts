import { getQuery } from './../untils';
import { switchMap, toArray, map } from 'rxjs/operators';
import { CATEGORY_SEARCH_LIMIN } from './../constants';
import { CategorySearch } from './category-search';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../assets/config.json';
import { httpOptions } from '../constants';
import { Observable, from } from 'rxjs';

@Injectable()
export class AddArticleService {
  constructor(private httpClient: HttpClient) {}

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(
      config.API.ARTICLE_POST,
      article,
      httpOptions,
    );
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
