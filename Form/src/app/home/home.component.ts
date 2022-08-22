import { PreciosService } from './../service/Precios.service';
import { Component,  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

   constructor(public PreciosService:PreciosService){

   }

   cambiosCheckbox(event:any){
    if(event.target.checked){
      this.PreciosService.precioTotal += Number(event.target.value);
   }else{
    this.PreciosService.precioTotal -= Number(event.target.value);
   }
  }
}
