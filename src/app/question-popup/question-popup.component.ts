import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import {
  filter,
  last,
  skip,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-question-popup',
  templateUrl: './question-popup.component.html',
  styleUrls: ['./question-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionPopupComponent implements OnInit {
  private secondsLeft = 5;
  private readonly destroy$ = new Subject<boolean>();

  questionForm: FormGroup;

  disable$ = new BehaviorSubject<boolean>(true);
  time: number;

  constructor(
    public thisDialogRef: MatDialogRef<QuestionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data: string,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      answer: ['', Validators.required],
    });

    this.thisDialogRef.disableClose = true;

    this.disable$
      .pipe(
        filter(val => val),
        switchMap(() =>
          timer(0, 1000).pipe(
            skip(1),
            take(this.secondsLeft),
            tap(time => (this.time = time)),
            last(),
            takeUntil(this.destroy$),
          ),
        ),
      )
      .subscribe(() => {
        this.thisDialogRef.disableClose = false;
        this.disable$.next(false);
      });

    this.thisDialogRef
      .backdropClick()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.secondsLeft += 5;
        this.disable$.next(true);
      });
  }

  send() {
    this.thisDialogRef.close();
  }

  close() {
    this.thisDialogRef.close();
  }
}
