import { Router } from '@angular/router';
import { Article } from './article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;

  constructor(private router: Router) {}

  navigate(id: string) {
    this.router.navigateByUrl(`article/${id}`);
  }
}
