import { PreciosService } from './../service/Precios.service';
import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { lista } from '../interfaces/Array.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  myForm:FormGroup = this.fb.group({
    nombreCliente:['',Validators.required],
    nombreDePresupuesto:['',Validators.required],
    web:[false ,Validators.required],
    Seo: [false,Validators.required],
    publicidad:[false,Validators.required],
  })

  

  get SumaTotal(){
    return this.PreciosService.precioTotalGlobal;
  }
  constructor(private fb:FormBuilder,private PreciosService:PreciosService ){}

  campoNoEsValido(campo:string){
    
    return this.myForm.controls[campo].value;
  }

  controlarPrecio(valor:number ,obj:string){
      if(this.myForm.controls[obj].value == false ){
        this.PreciosService.totalHome += valor
      }else if (this.myForm.controls[obj].value == true ){
        this.PreciosService.totalHome -= valor
      }
      
      
  }


  ngOnInit()  {
      this.myForm.controls.web.valueChanges.subscribe((web)  =>{
      console.log(web);
      this.PreciosService.statusFormWeb = web;
    });
    
  }
  get PresupuestoList() {
    return this.PreciosService.PresupuestoList;
  }
  submitForm(){
  
    const NewProject: lista = 
      {
        id: this.PresupuestoList.length + 1      ,
        nombreDePresupuesto: this.myForm.value.nombreDePresupuesto,
        nombreCliente: this.myForm.value.nombreCliente,
        date:       new Date(),
        total:      this.PreciosService.precioTotalGlobal
      }
    if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
    }else if (this.myForm.valid) {
      this.PresupuestoList.push(NewProject);
      this.PreciosService.guardarEnLocal(this.PresupuestoList)
      this.PreciosService.resetTotal();
      console.log(this.PresupuestoList);
    } 
    // this.myForm.reset();
  }
}

  

