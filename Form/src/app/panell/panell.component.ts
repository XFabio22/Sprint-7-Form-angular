import { Component,  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PreciosService } from './../service/Precios.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent  {

  constructor(private fb:FormBuilder ) { }
  myPanellForm :FormGroup = this.fb.group({
    paginas:[0,[Validators.required , Validators.min(0)]],
    idiomas:[0,[Validators.required , Validators.min(0)]]
  })
  opiones={
    paginas:0,
    idiomas:0
  }

  //tareas hacer que sume y reste al campo correcto y que el calor sea igual al de el input
  //preuba a crar una array dentro de el objeto para sumar y resatr indeendiente 
}
