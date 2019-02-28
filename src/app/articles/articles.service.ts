import { Article } from './../article/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as config from '../../assets/config.json';

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(config.API.ARTICLE_GET);
  }
}