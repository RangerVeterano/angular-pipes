import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'ignacio';
  nombreUpper: string = 'IGNACIO';
  nombreCompleto: string = 'IgNaciO BOhiGueS';

  fecha: Date = new Date(); //el dia de hoy

}
