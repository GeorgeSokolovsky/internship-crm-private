import { getHttpOptions } from './../utils';
import { httpOptions, lsTokenName } from './../constants';
import { UserAuth } from './user-auth';
import { UserLogin } from './user-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as config from '../../assets/config.json';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(userAuth: UserLogin): Observable<UserAuth> {
    return this.http.post<UserAuth>(
      config.API.AUTH_POST,
      userAuth,
      httpOptions,
    );
  }

  logOut() {
    localStorage.removeItem(lsTokenName);
  }

  isAuth(): boolean {
    const user: UserAuth = JSON.parse(localStorage.getItem(lsTokenName));
    return localStorage.hasOwnProperty(lsTokenName);
  }
}
