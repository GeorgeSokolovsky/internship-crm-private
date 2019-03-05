import { Router } from '@angular/router';
import { lsTokenName } from './../constants';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Auth, AuthSuccess } from './../actions/auth.actions';
import * as authActions from './../actions/auth.actions';
import { of } from 'rxjs';
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  auth$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.AUTH),
    switchMap((action: Auth) =>
      this.authService.logIn(action.payload).pipe(
        map(authUser => new authActions.AuthSuccess(authUser)),
        tap((action: AuthSuccess) => {
          localStorage.setItem(lsTokenName, JSON.stringify(action.payload));
          this.router.navigateByUrl('/article');
        }),
        catchError(error => of(new authActions.AuthFail(error))),
      ),
    ),
  );
}
