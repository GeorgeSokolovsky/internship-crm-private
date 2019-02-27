import { httpOptions, lsTokenName } from './../constants';
import { UserAuth } from './user-auth';
import { UserLogin } from './user-login';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root',
})
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
    return localStorage.hasOwnProperty(lsTokenName);
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem(lsTokenName)).token.accessToken;
  }
}
