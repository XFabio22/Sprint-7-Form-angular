import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class PreciosService implements OnInit{

    constructor(){}

    
    
    precioTotalGlobal:number = 0
    sumarPaYId:number = 0;
    numPaginas:number =0;

    numIdiomas: number = 0;

   
    


//    tienes un fallo a llamar la funcion probar a cambiar a Meter datos en una array

    sumaTotal(){
       this.sumarPaYId = (this.numIdiomas + this.numPaginas)*30;
       (this.precioTotalGlobal +=this.sumarPaYId ) ;
        console.log("tse",this.numIdiomas);

        console.log("total",this.sumarPaYId );
    }
    ngOnInit() {
        
        this.sumaTotal()
        
    }


  
    
}