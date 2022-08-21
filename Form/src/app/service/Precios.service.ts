import { Injectable } from "@angular/core";

@Injectable()

export class PreciosService{

   

    private _precios:number[]=[]

    get precios(){
        return [...this._precios];
    }
    total:number =0 

   calculateTotal(precio:number) {
    this._precios.push(precio)
    this.total = 0
   
   for(let i = 0; i < this.precios.length; i++ ){
       this.total += this.precios[i]; 
   }
   console.log(this.total)
  
  }

    constructor(){
        console.log('servicio Iniciado')
    }
}