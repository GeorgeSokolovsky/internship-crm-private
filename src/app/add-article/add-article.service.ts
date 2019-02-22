import { switchMap, toArray, map } from 'rxjs/operators';
import { CATEGORY_SEARCH_LIMIN } from './../constants';
import { Category } from './category';
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

  getCategories(search: string): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(
        `${
          config.API.CATEGORY_GET
        }?search=${search}&limit=${CATEGORY_SEARCH_LIMIN}`,
      )
      .pipe(map(data => data.map(el => ({ _id: el._id, name: el.name }))));
  }
}
