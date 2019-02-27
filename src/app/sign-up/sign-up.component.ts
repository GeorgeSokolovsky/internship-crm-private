import { Subject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SignUpService } from './sign-up.service';
import { SignUp } from './sign-up';
import { takeUntil, tap, switchMap, map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  private readonly destroy$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
    });
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  signUp() {
    this.signUpService
      .signUp(this.signUpForm.value)
      .pipe(
        map(() =>
          this.dialog.open(SignUpDialogComponent, {
            data: this.signUpForm.value,
          }),
        ),
        switchMap((ref: MatDialogRef<any>) => ref.afterClosed()),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.router.navigateByUrl('auth');
      });
  }
  isFieldInvalid(formControlName: string): boolean {
    const { touched, invalid } = this.signUpForm.get(formControlName);

    return touched && invalid;
  }
}
