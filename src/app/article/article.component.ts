import { Router } from '@angular/router';
// import { Article } from './article';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() article: Article;

  constructor(private router: Router) {}

  navigate(id: string) {
    this.router.navigateByUrl(`article/${id}`);
  }
}
