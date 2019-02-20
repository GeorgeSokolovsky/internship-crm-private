import { tap } from 'rxjs/operators';
import { AddArticleService } from './add-article.service';
import { Article } from './article';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
  providers: [AddArticleService]
})
export class AddArticleComponent {

  article: Article;
  addArticleForm: FormGroup;
  addResult = '';

  constructor(private addArticleService: AddArticleService) { 
    this.article = new Article();

    this.addArticleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]),
      imgUrl: new FormControl('')
    });
  }

  addArticle(formDirective: FormGroupDirective) {
    this.addArticleService.addArticle(this.article).subscribe(() => { 
      formDirective.resetForm();
    });
  }
}
