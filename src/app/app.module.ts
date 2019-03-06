import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthEffects } from './effects/auth.effects';
import { environment } from '../environments/environment';
import { ArticleEffects } from './effects/article.effects';
import { TokenExpiredInterceptor } from './auth/token-expired.interceptor';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthModule } from './auth/auth.module';
import { ArticleEditorModule } from './article-editor/article-editor.module';
import { ArticlesModule } from './articles/articles.module';
import { AddCategoryModule } from './add-category/add-category.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { StoreModule } from '@ngrx/store';
import { articleReducer } from './reducers/acticle.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer } from './reducers/auth.reducers';

const storeDevTools = [];

if (!environment.production) {
  storeDevTools.push(StoreDevtoolsModule.instrument());
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MenuModule,
    AuthModule,
    SignUpModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({
      article: articleReducer,
      auth: authReducer,
    }),
    EffectsModule.forRoot([ArticleEffects, AuthEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpiredInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
