import { AddCategoryRoutingModule } from './add-category-routing.module';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddCategoryComponent } from './add-category.component';

@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule,
    AddCategoryRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class AddCategoryModule {}
