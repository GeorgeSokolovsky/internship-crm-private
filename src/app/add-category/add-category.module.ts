import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddCategoryComponent } from './add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [AddCategoryComponent],
})
export class AddCategoryModule {}
