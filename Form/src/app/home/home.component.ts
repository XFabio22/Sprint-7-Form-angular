import { PreciosService } from './../service/Precios.service';
import { Component,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  myForm:FormGroup = this.fb.group({
    web:[false,Validators.required],
    Seo: [false,Validators.required],
    publicidad:[false,Validators.required]
  })


  personaOp={
    web:false,
    Seo:false,
    publicidad:false
  }

  precio:number= 0;



  
   constructor(private fb:FormBuilder ){}

   
  campoNoEsValido(campo:string){
    return this.myForm.controls[campo].value;
  }

   controlarPrecio(valor:number ,obj:string){
      if(this.myForm.controls[obj].value == true ){
         this.precio  -=valor  ;
      }else if (this.myForm.controls[obj].value == false ){
         this.precio += valor ;
      }
   }

   guardar(){
    const FormsValue = { ...this.myForm.value};
   
    this.personaOp = FormsValue;
    console.log(FormsValue);
  }
}
