import { Article } from './../article/article';
import { ArticlesService } from './articles.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articles$ = this.articlesService.getArticles();
  }
}
