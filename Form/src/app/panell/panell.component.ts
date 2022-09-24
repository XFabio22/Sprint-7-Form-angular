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
    // this.myPanellForm.controls.paginas.valueChanges.subscribe((valor:number) =>{
    //   console.log(valor);
    //   this.PreciosService.panelPrice(valor)
    // });
    // this.myPanellForm.controls.idiomas.valueChanges.subscribe((valor:number) =>{
    //   console.log(valor);
    //   this.PreciosService
    // });
    
}
  numPaginas: number = 0;
  numIdiomas: number = 0;


  panelPrice(){
    this.PreciosService.totalPanel = (this.numIdiomas + this.numPaginas)*30
    
  }

  sumar(campo:string){
    if( campo === "paginas"){
      this.numPaginas ++
    }else  if( campo === "idiomas"){
      this.numIdiomas ++;
    }
    this.panelPrice();
    
  }

  restar(valor:number,campo:string){
    if( valor > 0 && campo === "paginas" ){
      this.numPaginas --;     
    }
    else if( valor > 0 && campo === "idiomas"){
      this.numIdiomas --;
    }
    
    this.panelPrice();
  }
}
