import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


//definimos nuestras rutas
const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordernar',
    component: OrdenarComponent
  },
  {//ruta por defecto
    path: '**',
    redirectTo: ''
  }

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  //como lo tenemos que usar fuera lo tenemos que exportar
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
