import { takeUntil } from 'rxjs/operators';
import { AddArticleService } from './add-article.service';
import { Article } from './article';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
  providers: [AddArticleService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddArticleComponent {

  addArticleForm: FormGroup;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private addArticleService: AddArticleService) { 
    this.addArticleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]),
      imgUrl: new FormControl('')
    });
  }

  addArticle(formDirective: FormGroupDirective) {
    this.addArticleService.addArticle(this.addArticleForm.value)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {     
      formDirective.resetForm();
      this.destroy$.unsubscribe();
    });
  }

  isFieldValid(formControlName): boolean {
    return this.addArticleForm.controls[formControlName].touched 
           && this.addArticleForm.controls[formControlName].invalid;
  }
}
