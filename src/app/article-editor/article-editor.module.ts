import { ArticleEditorRoutingModule } from './article-editor-routing.module';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ArticleEditorComponent } from './article-editor.component';

@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    CommonModule,
    ArticleEditorRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class ArticleEditorModule {}
