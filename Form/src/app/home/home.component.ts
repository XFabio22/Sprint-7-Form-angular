import { PreciosService } from './../service/Precios.service';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  myForm:FormGroup = this.fb.group({
    nombreCliente:['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-z]\d*$/)]],
    nombreDePresupuesto:['',[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-z]\d*$/)]],
    web:[false ,Validators.required],
    Seo: [false,Validators.required],
    publicidad:[false,Validators.required],
  })

  total:number = 0;


  precioSubscription!:Subscription 
  // personaOp={
  //   nombreCliente:'',
  //   nombreDePresupuesto:'',
  //   web:false,
  //   Seo:false,
  //   publicidad:false,
  
  // }

  get SumaTotal(){
    return this.PreciosService.precioTotalGlobal;
  }
  constructor(private fb:FormBuilder,private PreciosService:PreciosService ){}

  campoNoEsValido(campo:string){
    
    return this.myForm.controls[campo].value;
  }

  controlarPrecio(valor:number ,obj:string){
      if(this.myForm.controls[obj].value == true ){
        this.total -= valor
        this.PreciosService.precioTotal=this.total;
      }else if (this.myForm.controls[obj].value == false ){
        this.total += valor
        this.PreciosService.precioTotal=this.total;
      }
      this.PreciosService.sumarTodo();
  }
  submitForm(){
  const formValue = {...this.myForm.value}
  this.PreciosService.guardarObj(formValue) ;
  }


  ngOnDestroy(): void {
    this.precioSubscription.unsubscribe(); // probar para mañana
    
  }      
  ngOnInit()  {
      this.precioSubscription = this.myForm.controls.web.valueChanges.subscribe((web)  =>{
      console.log(web);
      this.PreciosService.statusFormWeb = web;
    })
  }

}
