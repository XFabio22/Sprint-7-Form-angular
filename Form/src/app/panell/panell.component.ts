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
    paginas:[1,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]],
    idiomas:[1,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]]
  })

  numPaginas: number = 1;
  numIdiomas: number = 1;
  
  multiValor:number = 0 ;

  sumar(campo:string){
    if( campo === "paginas"){
      this.numPaginas ++;
    }else  if( campo === "idiomas"){
      this.numIdiomas ++;
 
    }


  }

  restar(valor:number,campo:string){
    
    if( valor > 1 && campo === "paginas" ){
      this.numPaginas --;     
    }
    else if( valor > 1 && campo === "idiomas"){
      this.numIdiomas ++;

    }
   

  
  }


  // multiValores(){
  //   this.multiValor = (this.opiones.paginas  + this.opiones.idiomas) * 30
  //   console.log(this.multiValor)
  //   this.PreciosService.precioTotalGlobal += this.multiValor

  // }
  //tareas hacer que sume y reste al campo correcto y que el calor sea igual al de el input
  //preuba a crar una array dentro de el objeto para sumar y resatr indeendiente 
}
