import { PreciosService } from './../service/Precios.service';
import { Component,  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  mostrar:boolean = false

  totalglobal:number = 0;
  paguinas(precio:number){
    this.mostrar = !this.mostrar;
    
    this.PreciosService.calculateTotal(precio)
    this.totalglobal =  this.PreciosService.total;
  }
  
  valor(precio:number){
    
    this.PreciosService.calculateTotal(precio)
   this.totalglobal =  this.PreciosService.total;
  }
      // get precio1(){
      //   return this.PreciosService.precios;
      // }
      

   constructor(private PreciosService:PreciosService){

   }
  

}
