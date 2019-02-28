import { ArticleModule } from './../article/article.module';
import { ArticlesComponent } from './articles.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [ArticleModule, CommonModule],
  exports: [ArticlesComponent],
})
export class ArticlesModule {}
