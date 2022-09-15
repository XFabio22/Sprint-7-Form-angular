import { PreciosService } from './../service/Precios.service';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  myForm:FormGroup = this.fb.group({
    web:[false ,Validators.required],
    Seo: [false,Validators.required],
    publicidad:[false,Validators.required]
  })


  personaOp={
    web:false,
    Seo:false,
    publicidad:false
  }

  get SumaTotal(){
    return this.PreciosService.precioTotalGlobal;
  }
   constructor(private fb:FormBuilder,private PreciosService:PreciosService ){}

   campoNoEsValido(campo:string){
    return this.myForm.controls[campo].value;
  }

   controlarPrecio(valor:number ,obj:string){
      if(this.myForm.controls[obj].value == true ){
  
         this.PreciosService.precioTotalGlobal -= valor
      }else if (this.myForm.controls[obj].value == false ){
     
         this.PreciosService.precioTotalGlobal += valor
      }
   }

   
  ngOnInit()  {
     
  }

}
