import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject, timer } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import * as articleActions from './../actions/article.actions';
import { GreetingPopupComponent } from './../greeting-popup/greeting-popup.component';
import { QuestionPopupComponent } from './../question-popup/question-popup.component';
import { getArticles } from './../selectors/article.selectors';
import { State } from './../state/state';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit, AfterViewInit, OnDestroy {
  articles$ = this.store.select(getArticles);
  dialogRef;
  private readonly destroy$ = new Subject<boolean>();
  constructor(public dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new articleActions.LoadAll());
    setTimeout(() => {
      this.dialogRef = this.dialog.open(GreetingPopupComponent, {
        width: '600px',
        id: 'cdr',
      });

      this.dialogRef
        .afterClosed()
        .pipe(
          switchMap(() => timer(3000)),
          map(() =>
            this.dialog.open(QuestionPopupComponent, {
              width: '600px',
            }),
          ),
          takeUntil(this.destroy$),
        )
        .subscribe();
    });
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
