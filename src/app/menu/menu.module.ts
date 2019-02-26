import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [MatMenuModule, MatButtonModule, BrowserModule],
  exports: [MenuComponent],
})
export class MenuModule {}
