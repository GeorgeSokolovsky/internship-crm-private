import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [SignUpDialogComponent],
  exports: [SignUpComponent],
})
export class SignUpModule {}
