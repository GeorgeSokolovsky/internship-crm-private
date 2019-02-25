import { ArticlesComponent } from './articles/articles.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'article', component: AddArticleComponent },
  { path: 'article/:id', component: AddArticleComponent },
  { path: 'category', component: AddCategoryComponent },
  { path: 'view', component: ArticlesComponent },
  { path: '', redirectTo: '/category', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
