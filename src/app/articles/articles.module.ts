import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleModule } from './../article/article.module';
import { ArticlesComponent } from './articles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [CommonModule, ArticlesRoutingModule, ArticleModule],
  exports: [ArticlesComponent],
})
export class ArticlesModule {}
