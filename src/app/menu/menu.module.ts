import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule{}