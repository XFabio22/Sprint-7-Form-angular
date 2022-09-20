import { PreciosService } from './../service/Precios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto-lista',
  templateUrl: './presupuesto-lista.component.html',
})
export class PresupuestoListaComponent implements OnInit {

  PresupuestoList:string[] = []
  constructor(private PreciosService:PreciosService) { }
  

  ngOnInit(): void {
  }
}
