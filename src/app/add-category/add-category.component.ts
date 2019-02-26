import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { AddCategoryService } from './add-category.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [AddCategoryService, AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private addCategoryService: AddCategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}
  ngOnInit() {
    if (!this.authService.isAuth()) this.router.navigateByUrl('/auth');
    this.addCategoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  addCategory() {
    const name = this.addCategoryForm.controls['name'];
    this.addCategoryService
      .addCategory({ name: name.value })
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.addCategoryForm.reset();
        for (let key in this.addCategoryForm.controls) {
          this.addCategoryForm.controls[key].setErrors(null);
        }
      });
  }

  isFieldInvalid(formControlName: string): boolean {
    const { touched, invalid } = this.addCategoryForm.get(formControlName);

    return touched && invalid;
  }
}
