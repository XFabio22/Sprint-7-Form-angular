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
//     const result4 = array.map((movie) => movie.title).sort().slice(0, 20);
// console.log('EXERCICE 4 ->', result4);
// return result4;
// }
    ordenarPorAz(){
      this.PreciosService.ordenarPorAz();
    }  
}
