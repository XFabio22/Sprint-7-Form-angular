import { FormBuilder, FormGroup } from '@angular/forms';
import { ArrayPrecios, formVal, objval, PresupuestoVal } from './../interfaces/Array.interface';
import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    constructor(){}
    PresupuestoList:any[] = [];
    arrayx:string= ''
    precioTotalGlobal:number = 0
    
    precioTotal:number = 0

    sumaDeValores:number = 0;

    numPaginas:number =0;
    numIdiomas: number = 0;

    statusFormWeb: boolean =false;
    guardarObj(formValue:formVal){
        const obj:objval = {
        formValue,
        precio: this.precioTotalGlobal,
        Paginas: this.numPaginas,
        Idiomas: this.numPaginas
        }
        console.log(obj);
        this.PresupuestoList.push(obj);
        console.log("lista",this.PresupuestoList);
        
    }
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
