import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    constructor(){}
    PresupuestoList:string[] = []
    // crearas un objeto aqui mismo con todos los dato centralizado y meteras ese obj en la array

    
    precioTotalGlobal:number = 0
    
    precioTotal:number = 0

    sumaDeValores:number = 0;

    numPaginas:number =0;
    numIdiomas: number = 0;

    statusFormWeb: boolean =false;
    ngOnInit() {

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