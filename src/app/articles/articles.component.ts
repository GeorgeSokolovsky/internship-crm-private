import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Article } from './../article/article';
import { ArticlesService } from './articles.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesService, AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(
    private articlesService: ArticlesService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (!this.authService.isAuth()) this.router.navigateByUrl('/auth');
    this.articles$ = this.articlesService.getArticles();
  }
}
