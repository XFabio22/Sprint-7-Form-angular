import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable } from "@angular/core";

@Injectable()

export class PreciosService{

    constructor(){}
    precioTotalGlobal:number = 0
    multi :number = 0

    opiones={
        paginas:0,
        idiomas:0
    }
   
    
}