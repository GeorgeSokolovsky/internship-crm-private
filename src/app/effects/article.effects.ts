import { ArticlesService } from './../articles/articles.service';
import { ArticleEditorService } from './../article-editor/article-editor.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Add, LoadOne, Update } from './../actions/article.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as articleActions from './../actions/article.actions';
import { Article } from '../models/article.model';
@Injectable({
  providedIn: 'root',
})
export class ArticleEffects {
  constructor(
    private actions$: Actions,
    private articleEditorService: ArticleEditorService,
    private articlesService: ArticlesService,
  ) {}

  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType(articleActions.ArticleActionTypes.LOAD_ALL),
    switchMap(() =>
      this.articlesService.getArticles().pipe(
        map(articles => new articleActions.LoadAllSuccess(articles)),
        catchError(() => of(new articleActions.LoadAllFail())),
      ),
    ),
  );

  @Effect()
  addArticle$ = this.actions$.pipe(
    ofType(articleActions.ArticleActionTypes.ADD),
    switchMap((action: Add) =>
      this.articleEditorService.addArticle(action.payload).pipe(
        map((article: Article) => new articleActions.AddSuccess()),
        catchError(() => of(new articleActions.AddedFail())),
      ),
    ),
  );

  @Effect()
  selectOne$ = this.actions$.pipe(
    ofType(articleActions.ArticleActionTypes.LOAD_ONE),
    switchMap((action: LoadOne) =>
      this.articleEditorService.getArticleById(action.payload).pipe(
        map((article: Article) => new articleActions.LoadOneSuccess(article)),
        catchError(() => of(new articleActions.LoadOneFail())),
      ),
    ),
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(articleActions.ArticleActionTypes.UPDATE),
    switchMap((action: Update) =>
      this.articleEditorService
        .updateArticle(action.payload.id, action.payload.article)
        .pipe(
          map(() => new articleActions.UpdateSuccess()),
          catchError(() => of(new articleActions.UpdateFail())),
        ),
    ),
  );
}
