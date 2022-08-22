import { ArrayPrecios } from './../interfaces/Array.interface';
import { Injectable } from "@angular/core";

@Injectable()

export class PreciosService{

   precioTotal:number = 0

    private _precios:ArrayPrecios[]=[
        {
            nombre:'Pagina web',
            costo: 500,
            id: 'web'
        },
        {
            nombre:'SEO',
            costo: 300,
            id: 'seo'
        },
        {
            nombre:'ABS',
            costo: 200,
            id: 'abs'
        }
    ]

    get precios(){
        return [...this._precios];
    } 
    constructor(){
        console.log('servicio Iniciado')
    }
}