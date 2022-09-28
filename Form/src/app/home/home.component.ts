import { PreciosService } from './../service/Precios.service';
import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lista } from '../interfaces/Array.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges  {
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


ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
}

  ngOnInit()  {
      this.myForm.controls.web.valueChanges.subscribe((web:boolean)  =>{
      this.PreciosService.ControlDelPanel(web,500)
    
    
    });
    this.myForm.controls.Seo.valueChanges.subscribe((Seo:boolean)  =>{
      this.PreciosService.ControlDelPanel(Seo,300)
    
    
    });
    this.myForm.controls.publicidad.valueChanges.subscribe((publicidad:boolean)  =>{
      this.PreciosService.ControlDelPanel(publicidad,200)
      
    
    });
  }
  estado !:boolean 
  get PresupuestoList() {
    return this.PreciosService.PresupuestoList;
  }
  total:number = 0;
  controlarPrecio(campo:string , valor:number){
    if(this.myForm.controls[campo].value == true){
          this.PreciosService.totalHome -= valor
          
    }else if (this.myForm.controls[campo].value == false)  {
      this.PreciosService.totalHome += valor
    }
  }
  submitForm(){
    const NuevoPresupuesto: lista = 
      {
        
        nombreDePresupuesto: this.myForm.value.nombreDePresupuesto,
        nombreCliente: this.myForm.value.nombreCliente,
        fecha: new Date,
        total: this.PreciosService.precioTotalGlobal
      }
      
    if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
    }else if (this.myForm.valid) {
      NuevoPresupuesto.nombreCliente.toUpperCase
      this.PresupuestoList.push(NuevoPresupuesto);
      this.PreciosService.guardarEnLocal(this.PresupuestoList)
      this.PreciosService.totalPrice();
      console.log(this.PresupuestoList);
      this.PreciosService.restarTotal();
      this.myForm.reset({publicidad:false,Seo:false,web:false}); //manera de hacer el reset y no dejar los valores en NULL
    } 
  }
}

