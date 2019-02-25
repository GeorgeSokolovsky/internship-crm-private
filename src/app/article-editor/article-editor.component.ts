import { SEARCH_DEBOUNCE_TIME } from './../constants';
import { ActivatedRoute } from '@angular/router';
import { ArticleEditorService } from './article-editor.service';
import { Observable, Subject } from 'rxjs';
import { CategorySearch } from './category-search';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
  providers: [ArticleEditorService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleEditorComponent implements OnInit, OnDestroy {
  articleForm: FormGroup;
  categories: CategorySearch[] = [];
  filteredOptions$: Observable<CategorySearch[]>;

  articleId: string;

  private readonly destroy$ = new Subject<boolean>();

  constructor(
    private articleEditorService: ArticleEditorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.articleForm = this.formBuilder.group({
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
    } = this.articleForm.value;
    const article = { ...this.articleForm.value, category: _id };

    this.articleEditorService
      .addArticle(article)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.articleForm.reset();
        Object.values(this.articleForm.controls).forEach(control =>
          control.setErrors(null),
        );
      });
  }

  updateArticle() {
    const {
      category: { _id },
    } = this.articleForm.value;
    const article = { ...this.articleForm.value, category: _id };

    this.articleEditorService
      .updateArticle(this.articleId, article)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  isFieldInvalid(formControlName: string): boolean {
    const { touched, invalid } = this.articleForm.get(formControlName);

    return touched && invalid;
  }

  displayValue(category: CategorySearch): string {
    return category && category.name;
  }

  getAction() {
    return this.articleId === undefined
      ? this.addArticle()
      : this.updateArticle();
  }

  getButtonText() {
    return this.articleId === undefined ? 'Add' : 'Update';
  }

  ngOnInit() {
    this.articleId = this.route.snapshot.params.id;
    if (this.articleId !== undefined) {
      this.articleEditorService
        .getArticleById(this.articleId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(article => {
          this.articleForm.patchValue(article);
        });
    }

    const category = this.articleForm.get('category');

    this.filteredOptions$ = category.valueChanges.pipe(
      debounceTime(SEARCH_DEBOUNCE_TIME),
      switchMap(() => this.articleEditorService.getCategories(category.value)),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
