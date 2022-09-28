import { lista } from './../interfaces/Array.interface';

import { Injectable, OnInit } from "@angular/core";


@Injectable()

export class PreciosService implements OnInit {

    
    PresupuestoList:lista[] = [];
    totalHome:number = 0;
    precioTotalGlobal:number = 0
    totalPanel:number = 0
    ngOnInit() {
    
    }
    constructor(){
        // this.PresupuestoList = JSON.parse(localStorage.getItem('historial')!)||[];
    }
    guardarEnLocal(lista:lista[]){
        localStorage.setItem('lista', JSON.stringify(lista))

    }
    ControlDelPanel(campo:boolean,valor:number){
            if(campo == false && valor == 500){
                this.totalPanel = 0;
            }
    }

    

    totalPrice(){
        this.precioTotalGlobal = (this.totalHome + this.totalPanel );
        return this.precioTotalGlobal;
    }
    restarTotal(){
        this.totalPanel = 0;
        this.totalHome = 0 /// esta puta mierda tarde 2dias mas :)
        this.precioTotalGlobal= 0;
    }


    getListFromLocalStorage(item: string) {
        if (!localStorage.getItem(item)) {
        return;
        }
        this.PresupuestoList = JSON.parse(localStorage.getItem(item)!)||[];
    }

    ordenarPorAz(){
        this.PresupuestoList.sort((a,b)  =>{
            if (a.nombreCliente < b.nombreCliente){ //a es menor que b según criterio de ordenamiento
            return -1;
            }
            if (a.nombreCliente > b.nombreCliente){ //a es mayor que b según criterio de ordenamiento
            return 1
            }
            return 0; // a debe ser igual b
        })
        console.log(this.PresupuestoList);
    }

ordenPorNum(){
    this.PresupuestoList.sort((a,b) =>{
            if(a.fecha < b.fecha){
                return -1
            }if (a.fecha > b.fecha){ 
                return 1
            }
            return 0; 
        })

    }
    reset(){
        this.getListFromLocalStorage('lista');
    }
} 