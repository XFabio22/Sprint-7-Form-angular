import { PreciosService } from './../service/Precios.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-presupuesto-lista',
  templateUrl: './presupuesto-lista.component.html',
})
export class PresupuestoListaComponent implements OnInit {
  constructor(private PreciosService:PreciosService) { }
  ngOnInit(): void {
    this.PreciosService.getListFromLocalStorage('lista');
  }

    get Lista() {
      return this.PreciosService.PresupuestoList;
    }

    ordenarPorAz(){
      this.PreciosService.ordenarPorAz();
    }  

    ordenPorNum(){
      this.PreciosService.ordenPorNum();
    }
    reset(){
      this.PreciosService.reset()
    }
}
