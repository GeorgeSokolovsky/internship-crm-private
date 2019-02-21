import { takeUntil } from 'rxjs/operators';
import { AddArticleService } from './add-article.service';
import { Article } from './article';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
  providers: [AddArticleService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddArticleComponent implements OnDestroy{

  addArticleForm: FormGroup;
  formControls;
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private addArticleService: AddArticleService) { 
    this.addArticleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]),
      imgUrl: new FormControl('')
    });
    
    this.formControls = this.addArticleForm.controls;
  }

  addArticle(formDirective: FormGroupDirective) {
    this.addArticleService.addArticle(this.addArticleForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => formDirective.resetForm());
  }

  isFieldInvalid(formControlName: string): boolean {
    return this.formControls[formControlName].touched 
           && this.formControls[formControlName].invalid;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
