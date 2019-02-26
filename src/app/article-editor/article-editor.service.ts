import { getHttpOptions } from './../utils';
import { getQuery } from '../utils';
import { map } from 'rxjs/operators';
import { CategorySearch } from './category-search';
import { ArticleEditor } from './article-editor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../assets/config.json';
import { httpOptions } from '../constants';
import { Observable, from } from 'rxjs';

@Injectable()
export class ArticleEditorService {
  constructor(private httpClient: HttpClient) {}

  addArticle(article: ArticleEditor): Observable<ArticleEditor> {
    return this.httpClient.post<ArticleEditor>(
      config.API.ARTICLE_POST,
      article,
      getHttpOptions(),
    );
  }

  updateArticle(id: string, article: ArticleEditor): Observable<ArticleEditor> {
    return this.httpClient.put<ArticleEditor>(
      `${config.API.ARTICLE_PUT}/${id}`,
      article,
      getHttpOptions(),
    );
  }

  getArticleById(id: string): Observable<ArticleEditor> {
    return this.httpClient.get<ArticleEditor>(
      `${config.API.ARTICLE_GET}/${id}`,
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
