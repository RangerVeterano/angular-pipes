import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayus: boolean = true;

  ordernarPor: string = 'nombre';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    }, {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // Metodo que cambia de de verdadero al falso y viceversa
  cambiarMayusculas() {

    //Esto es mejor que lo de abajo
    this.enMayus = !this.enMayus;

    // if (this.enMayus) {
    //   this.enMayus = false;
    // } else {
    //   this.enMayus = true
    // }
  }

  cambiarOrden(arg: string) {
    // console.log(arg);
    this.ordernarPor = arg;
  }

}
