import { SharedPipesModule } from './shared-pipes.module';
import { ArticleComponent } from './article.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    SharedPipesModule,
    BrowserAnimationsModule,
  ],
  exports: [ArticleComponent],
})
export class ArticleModule {}
