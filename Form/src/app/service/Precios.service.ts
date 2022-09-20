import { lista } from './../interfaces/Array.interface';

import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    
   PresupuestoList:lista[] = [];

    precioTotalGlobal:number = 0
    
    precioTotal:number = 0

    sumaDeValores:number = 0;

    numPaginas:number =0;
    numIdiomas: number = 0;

    statusFormWeb: boolean =false;
   
    ngOnInit() {
    }
    constructor(){
         this.PresupuestoList = JSON.parse(localStorage.getItem('historial')!)||[];
    }
    guardarEnLocal(lista:lista[]){
        localStorage.setItem('lista', JSON.stringify(lista))
    }
    resetTotal(){
        this.precioTotal= 0;
        this.precioTotalGlobal= 0;
        
    }

    getListFromLocalStorage(item: string) {
        if (!localStorage.getItem(item)) {
          return;
        }
        JSON.parse(localStorage.getItem(item)!)
      }
    sumarTodo(){

        if(this.statusFormWeb == false){
            this.numIdiomas = 0;
            this.numPaginas = 0;
            this.sumaDeValores  =0;
            this.precioTotalGlobal = ( this.precioTotal -  this.sumaDeValores );
        }else {
            this.precioTotalGlobal = ( this.sumaDeValores + this.precioTotal);
        }
    }

}
