import { QuestionPopupComponent } from './../question-popup/question-popup.component';
import {
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
} from '@angular/material';
import { GreetingPopupComponent } from './../greeting-popup/greeting-popup.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleModule } from './../article/article.module';
import { ArticlesComponent } from './articles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ArticlesComponent,
    GreetingPopupComponent,
    QuestionPopupComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ArticlesRoutingModule,
    ArticleModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [ArticlesComponent],
  entryComponents: [GreetingPopupComponent, QuestionPopupComponent],
})
export class ArticlesModule {}
