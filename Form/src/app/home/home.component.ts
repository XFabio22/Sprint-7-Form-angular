import { PreciosService } from './../service/Precios.service';
import { Component,  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

   constructor(private PreciosService:PreciosService){

   }
  

}
