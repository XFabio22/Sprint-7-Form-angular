import { Component,  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PreciosService } from './../service/Precios.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent  {

  constructor(private fb:FormBuilder , private PreciosService:PreciosService ) { }
  myPanellForm :FormGroup = this.fb.group({
    paginas:[0,[Validators.required , Validators.min(0)]],
    idiomas:[0,[Validators.required , Validators.min(0)]]
  })
  opiones={
    paginas:0,
    idiomas:0
  }

  totalDePaginas:number = 0 ;
  totalDeIdiomas:number = 0 ;

  sumar(valor:number,campo:string){
    if( campo === "paginas"){
      this.opiones.paginas += valor;
      this.myPanellForm.controls[campo].setValue(this.opiones.paginas);
    }else  if( campo === "idiomas"){
      this.opiones.idiomas += valor;
      this.myPanellForm.controls[campo].setValue(this.opiones.idiomas);
    }
    console.log(this.opiones)
  }
  restar(valor:number,campo:string){
    if( campo === "paginas"){
      this.opiones.paginas -= valor;
      this.myPanellForm.controls[campo].setValue(this.opiones.paginas);  
    }else  if( campo === "idiomas"){
      this.opiones.idiomas -= valor;
      this.myPanellForm.controls[campo].setValue(this.opiones.idiomas);
    }
    console.log(this.opiones)

  }

  //tareas hacer que sume y reste al campo correcto y que el calor sea igual al de el input
  //preuba a crar una array dentro de el objeto para sumar y resatr indeendiente 
}
