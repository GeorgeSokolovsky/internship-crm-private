import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_IMAGE } from './../constants';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string): string {
    return value || DEFAULT_IMAGE;
  }
}
