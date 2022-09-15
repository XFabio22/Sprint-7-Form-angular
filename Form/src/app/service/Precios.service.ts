import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    constructor(){}

    
    precioTotalGlobal:number = 0
    precioTotal:number = 0
    sumaDeValores:number = 0;
    numPaginas:number =0;
    numIdiomas: number = 0;
    ngOnInit() {

    }


    sumarTodo(){
    this.precioTotalGlobal = ( this.sumaDeValores + this.precioTotal)
        console.log("Valores sumados",this.precioTotal);
        console.log("Valores x");
    }

}