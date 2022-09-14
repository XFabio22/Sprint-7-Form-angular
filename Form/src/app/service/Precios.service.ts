import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable } from "@angular/core";

@Injectable()

export class PreciosService{

    constructor(){}
    precioTotalGlobal:number = 0
    

    numeroDe={
        paginas:0,
        idiomas:0
    }
    sumarTodo(){
      const multi= (this.numeroDe.paginas * this.numeroDe.idiomas * 30);

      this.precioTotalGlobal + multi;
        console.log(multi)
    }
//llamar la funcion es lo unico que falta
    
}