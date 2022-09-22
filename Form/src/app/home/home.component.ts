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
  return this.PreciosService.totalPrice();
}

constructor(private fb:FormBuilder,private PreciosService:PreciosService ){}

campoNoEsValido(campo:string){
  return this.myForm.controls[campo].value;
}

controlarPrecio(valor:number ,obj:string){
  if(this.myForm.controls[obj].value ){
    this.PreciosService.totalHome -= valor
  }else {
    this.PreciosService.totalHome += valor
  }
}

  ngOnInit()  {
      this.myForm.controls.web.valueChanges.subscribe((web:boolean)  =>{
      this.PreciosService.statusFormWeb =web
      this.PreciosService.totalPrice();
    });
  }

  get PresupuestoList() {
    return this.PreciosService.PresupuestoList;
  }

  submitForm(){
    const NuevoPresupuesto: lista = 
      {
        index: this.PresupuestoList.length + 1      ,
        nombreDePresupuesto: this.myForm.value.nombreDePresupuesto,
        nombreCliente: this.myForm.value.nombreCliente,
        fecha: new Date,
        total: this.PreciosService.precioTotalGlobal
      }
    if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
    }else if (this.myForm.valid) {
      this.PresupuestoList.push(NuevoPresupuesto);
      this.PreciosService.guardarEnLocal(this.PresupuestoList)
      this.PreciosService.resetTotal();
      console.log(this.PresupuestoList);
      this.PreciosService.totalPrice();
      this.myForm.reset();
    } 
  }
}

