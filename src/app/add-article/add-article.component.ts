import { SEARCH_DEBOUNCE_TIME } from './../constants';
import { CategorySearch } from './category-search';
import { takeUntil, switchMap, tap, debounceTime } from 'rxjs/operators';
import { AddArticleService } from './add-article.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
  providers: [AddArticleService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddArticleComponent implements OnInit, OnDestroy {
  addArticleForm: FormGroup;
  categories: CategorySearch[] = [];
  filteredOptions$: Observable<CategorySearch[]>;

  private readonly destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private addArticleService: AddArticleService,
    private formBuilder: FormBuilder,
  ) {
    this.addArticleForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
      category: ['', [Validators.required]],
      imgUrl: [''],
    });
  }

  addArticle() {
    const {
      category: { _id },
    } = this.addArticleForm.value;
    const article = { ...this.addArticleForm.value, category: _id };

    this.addArticleService
      .addArticle(article)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.addArticleForm.reset();
        for (let key in this.addArticleForm.controls) {
          this.addArticleForm.controls[key].setErrors(null);
        }
      });
  }

  isFieldInvalid(formControlName: string): boolean {
    const { touched, invalid } = this.addArticleForm.get(formControlName);

    return touched && invalid;
  }

  displayValue(category: CategorySearch) {
    return category ? category.name : '';
  }

  ngOnInit() {
    const category = this.addArticleForm.get('category');
    this.filteredOptions$ = category.valueChanges.pipe(
      tap(() => (this.categories.length = 0)),
      debounceTime(SEARCH_DEBOUNCE_TIME),
      switchMap(() => this.addArticleService.getCategories(category.value)),
      takeUntil(this.destroy$),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
