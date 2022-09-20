import { PreciosService } from './../service/Precios.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-presupuesto-lista',
  templateUrl: './presupuesto-lista.component.html',
})
export class PresupuestoListaComponent implements OnInit {
  constructor(private PreciosService:PreciosService) { }
  ngOnInit(): void {
    this.PreciosService.getListFromLocalStorage('list');
   }

    get Lista() {
      return this.PreciosService.PresupuestoList;
    }

    deleteBudget(index: number) {
      this.Lista.slice(index, 1);
    }


}
