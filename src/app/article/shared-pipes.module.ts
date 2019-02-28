import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@NgModule({
  declarations: [DefaultImagePipe],
  exports: [DefaultImagePipe],
  imports: [CommonModule],
})
export class SharedPipesModule {}
