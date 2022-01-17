import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //i18nSelect
  nombre: string = 'Ignacio';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Alberto', 'Ignacio', 'Adrian'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando' //con el # indicamos el valor que estamos recibiendo 
  }

  //metodo para cambiar el cliente
  cambiarCliente() {
    //Si el nombre es Ignacio lo pasamos a chica
    if (this.nombre === 'Ignacio') {
      this.nombre = 'Andrea';
      this.genero = 'femenino';

      //En el caso contrario devolvemos al chico
    } else {
      this.nombre = 'Ignacio';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    this.clientes.splice(0, 1)
  }

  //keyValue Pipe
  persona = {
    nombre: 'Ignacio',
    edad: 23,
    direccion: 'Alcoy, España'
  }

  //Json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000).pipe(tap(() => console.log('interval'))); //1,2,3,4,5,6,7,8 Literalmente es un intervalo que va mostrando numeros cada 5 segundo

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500)

  });

}
