import { getArticles } from './../selectors/article.selectors';
import { State } from './../state/state';
import { ArticlesService } from './articles.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as articleActions from './../actions/article.actions';
import { Article } from '../models/article.model';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new articleActions.LoadAll());
    this.articles$ = this.store.select(getArticles);
  }
}
