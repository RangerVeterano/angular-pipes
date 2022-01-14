import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Nuestro modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el locale de la app
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEs); //con eso registramos nuestro lenguaje español
registerLocaleData(localeFr); //con eso registramos nuestro lenguaje español

@NgModule({
  declarations: [
    AppComponent
  ],
  //En imports se importan los modulos
  imports: [
    BrowserModule,
    SharedModule, //Nuestro modulo de menu
    AppRouterModule, //Nuestro modulo de rutas personalizadas,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
