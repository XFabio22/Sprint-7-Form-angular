import { Component,  } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PreciosService } from './../service/Precios.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent  {


  


  constructor(private PreciosService:PreciosService) { 

  }



}
