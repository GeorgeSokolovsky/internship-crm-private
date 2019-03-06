import { SharedPipesModule } from './shared-pipes.module';
import { ArticleComponent } from './article.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ArticleComponent],
  imports: [MatCardModule, MatButtonModule, SharedPipesModule],
  exports: [ArticleComponent],
})
export class ArticleModule {}
