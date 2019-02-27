import { WithoutAuthGuard } from './auth/without-auth.guard';
import { WithAuthGuard } from './auth/with-auth.guard';
import { AuthComponent } from './auth/auth.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivate: [WithoutAuthGuard] },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [WithoutAuthGuard],
  },
  {
    path: 'article',
    component: ArticleEditorComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'article/:id',
    component: ArticleEditorComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'category',
    component: AddCategoryComponent,
    canActivate: [WithAuthGuard],
  },
  { path: 'view', component: ArticlesComponent, canActivate: [WithAuthGuard] },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
