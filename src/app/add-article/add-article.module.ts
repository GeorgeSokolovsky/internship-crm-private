import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddArticleComponent } from './add-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddArticleComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [AddArticleComponent],
})
export class AddArticleModule {}
