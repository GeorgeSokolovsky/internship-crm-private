import { AddCategoryModule } from './add-category/add-category.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { AddArticleModule } from './add-article/add-article.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuModule,
    AddArticleModule,
    AddCategoryModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
