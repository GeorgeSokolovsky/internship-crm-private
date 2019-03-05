import { tap, takeUntil, switchMap } from 'rxjs/operators';
import { State } from './../state/state';
import { Store } from '@ngrx/store';
import { checkValidFormGroup, FieldErrorChecker } from './../utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as authActions from './../actions/auth.actions';
import { getAuthError } from '../selectors/auth.selectors';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  private readonly isUserInvalid$: Subject<boolean> = new Subject<boolean>();
  isFieldInvalid: FieldErrorChecker;
  authError$: Observable<Error> = this.store.select(getAuthError);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<State>,
  ) {}

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.isFieldInvalid = checkValidFormGroup(this.authForm);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  auth() {
    this.authError$
      .pipe(
        tap(err => this.isUserInvalid$.next(err instanceof HttpErrorResponse)),
        switchMap(() => this.isUserInvalid$),
      )
      .subscribe();

    this.store.dispatch(new authActions.Auth(this.authForm.value));
  }

  toSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
