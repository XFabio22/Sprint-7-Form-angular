import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable } from "@angular/core";

@Injectable()

export class PreciosService{

   precioTotal:number = 0

    private _precios:ArrayPrecios[]=[
        {
            nombre:'Pagina web',
            costo: 500,
           
        },
        {
            nombre:'Una consultoria SEO',
            costo: 300,
         
        },
        {
            nombre:'Una campanya de Google Ads',
            costo: 200,
        
        }
    ]

    get precios(){
        return [...this._precios];
    } 
    constructor(){
        console.log('servicio Iniciado')
    }
}