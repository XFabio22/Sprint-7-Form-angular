import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto-lista',
  templateUrl: './presupuesto-lista.component.html',
})
export class PresupuestoListaComponent implements OnInit {

  PresupuestoList:string[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
