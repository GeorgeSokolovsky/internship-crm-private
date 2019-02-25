import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ArticleEditorComponent } from './article-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [ArticleEditorComponent],
})
export class ArticleEditorModule {}
