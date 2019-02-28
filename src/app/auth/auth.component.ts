import { checkValidFormGroup } from './../utils';
import { UserAuth } from './user-auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { lsTokenName } from '../constants';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  isFieldInvalid;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
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
    this.authService
      .logIn(this.authForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((userAuth: UserAuth) => {
        localStorage.setItem(lsTokenName, JSON.stringify(userAuth));
        this.router.navigateByUrl('/article');
      });
  }

  toSignUp() {
    this.router.navigateByUrl('/signup');
  }
}
