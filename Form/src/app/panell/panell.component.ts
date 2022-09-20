import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PreciosService } from './../service/Precios.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  constructor(private fb:FormBuilder , private PreciosService:PreciosService ) { }
  myPanellForm :FormGroup = this.fb.group({
    paginas:[0,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]],
    idiomas:[0,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]]
  })
  ngOnInit(){
    this.myPanellForm.controls.paginas.valueChanges.subscribe((paginas) =>{
      console.log(paginas);
      this.PreciosService.numPaginas = paginas;
    });
    this.myPanellForm.controls.idiomas.valueChanges.subscribe((idiomas) =>{
      console.log(idiomas);
      this.PreciosService.numIdiomas = idiomas;
    });

}
  numPaginas: number = 0;
  numIdiomas: number = 0;
  sumaDeValores: number = 0
  sumarTodo(){
    this.sumaDeValores =( this.numIdiomas * this.numPaginas)*30 ;
    this.PreciosService.sumaDeValores = this.sumaDeValores;
    this.PreciosService.sumarTodo();
  }

  sumar(campo:string){
    if( campo === "paginas"){
      this.numPaginas ++
    this.sumarTodo();
    }else  if( campo === "idiomas"){
      this.numIdiomas ++;
      this.sumarTodo();
    }
  }

  restar(valor:number,campo:string){
    if( valor > 0 && campo === "paginas" ){
      this.numPaginas --;     
      this.sumarTodo();
    }
    else if( valor > 0 && campo === "idiomas"){
      this.numIdiomas --;
      this.sumarTodo();
    }
  }
}
