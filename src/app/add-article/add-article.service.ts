import { Article } from './article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../assets/config.json';
import { httpOptions } from '../constants';
import { Observable } from 'rxjs';


@Injectable()
export class AddArticleService {
    constructor(private httpClient: HttpClient) {}

    addArticle(article: Article): Observable<Article> {
        return this.httpClient.post<Article>(config.API.ARTICLE_POST, article, httpOptions);
    }
}