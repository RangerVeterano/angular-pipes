import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule //importamos el modulo personalizado y tener acceso a los componentes de primeNg
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
