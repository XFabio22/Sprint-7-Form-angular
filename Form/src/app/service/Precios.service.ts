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
        // this.PresupuestoList = JSON.parse(localStorage.getItem('historial')!)||[];
    }
    guardarEnLocal(lista:lista[]){
        localStorage.setItem('lista', JSON.stringify(lista))
    }
    panelPrice(){
        this.totalPanel = (this.numIdiomas + this.numPaginas)*30;

    }

    resetTotal(){
        this.totalPanel= 0;
        this.precioTotalGlobal= 0;
        this.numIdiomas = 0;
        this.numPaginas = 0;
    }

    getListFromLocalStorage(item: string) {
        if (!localStorage.getItem(item)) {
        return;
        }
        JSON.parse(localStorage.getItem(item)!)
    }
    

}
