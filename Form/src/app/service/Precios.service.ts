import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    constructor(){}

    
    
    precioTotalGlobal:number = 0
    sumaDeValores:number = 0;
    numPaginas:number =0;
    numIdiomas: number = 0;
    ngOnInit() {
       this.sumarTodo();
    }
    sumarTodo(){
        this.sumaDeValores =( this.numIdiomas * this.numPaginas)*30 ;
        this.precioTotalGlobal += this.sumaDeValores;
        console.log("Valores sumados",this.sumaDeValores);

        
        
    }
    

  
    
}