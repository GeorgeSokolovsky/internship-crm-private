import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [AuthService],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.authService.isAuth()) this.router.navigateByUrl('/article');

    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
    });
  }

  isFieldInvalid(formControlName: string): boolean {
    const { touched, invalid } = this.signUpForm.get(formControlName);

    return touched && invalid;
  }
}
