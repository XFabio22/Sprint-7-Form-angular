import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PreciosService } from './../service/Precios.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent  {


  
  paginasYIdiomas = new FormGroup({
    paginas: new FormControl(1),
    idiomas: new FormControl(1)
  })
  
  
  datos(){
    
  }


  constructor(private PreciosService:PreciosService) { 

  }



}
