import { ArticleEditorModule } from './article-editor/article-editor.module';
import { ArticlesModule } from './articles/articles.module';
import { AddCategoryModule } from './add-category/add-category.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuModule,
    ArticlesModule,
    ArticleEditorModule,
    AddCategoryModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
