import { lista } from './../interfaces/Array.interface';

import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    
    PresupuestoList:lista[] = [];
    totalHome:number = 0;
    precioTotalGlobal:number = 0
    
    totalPanel:number = 0

    sumaDeValores:number = 0;

    numPaginas:number =0;
    numIdiomas: number = 0;

    statusFormWeb: boolean =false;
    ngOnInit() {
    }
    constructor(){

        if(this.statusFormWeb == false){
            this.numIdiomas = 0;
            this.numPaginas = 0;
            this.totalPanel = 0;
        }
        // this.PresupuestoList = JSON.parse(localStorage.getItem('historial')!)||[];
    }
    guardarEnLocal(lista:lista[]){
        localStorage.setItem('lista', JSON.stringify(lista))
    }
    resetTotal(){
        this.totalPanel= 0;
        this.totalHome= 0;
        this.precioTotalGlobal = 0;
        this.numIdiomas = 0;
        this.numPaginas = 0;
        console.log("global",this.precioTotalGlobal)
        console.log("home",this.totalHome)
    }
    

    totalPrice(){
        this.precioTotalGlobal = (this.totalHome + this.totalPanel );
        return this.precioTotalGlobal;
    }


    getListFromLocalStorage(item: string) {
        if (!localStorage.getItem(item)) {
        return;
        }
        this.PresupuestoList = JSON.parse(localStorage.getItem(item)!)||[];
    }

    ordenarPorAz(){
        this.PresupuestoList.map((item)=> item.nombreCliente).sort();
        console.log(this.PresupuestoList);
        
    }
}
