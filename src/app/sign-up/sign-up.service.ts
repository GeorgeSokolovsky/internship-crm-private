import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from './sign-up';
import * as config from '../../assets/config.json';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {}

  signUp(newUser: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>(config.API.SIGN_UP_POST, newUser);
  }
}
