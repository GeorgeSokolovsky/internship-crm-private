import { WithoutAuthGuard } from './auth/without-auth.guard';
import { WithAuthGuard } from './auth/with-auth.guard';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: './article-editor/article-editor.module#ArticleEditorModule',
    canActivate: [WithAuthGuard],
  },
  {
    path: 'category',
    loadChildren: './add-category/add-category.module#AddCategoryModule',
    canActivate: [WithAuthGuard],
  },
  {
    path: 'view',
    loadChildren: './articles/articles.module#ArticlesModule',
    canActivate: [WithAuthGuard],
  },
  {
    path: 'signup',
    loadChildren: './sign-up/sign-up.module#SignUpModule',
    canActivate: [WithoutAuthGuard],
  },
  { path: 'auth', component: AuthComponent, canActivate: [WithoutAuthGuard] },

  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
