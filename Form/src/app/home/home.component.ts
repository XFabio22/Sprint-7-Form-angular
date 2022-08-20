import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrar:boolean = false

  paguinas(precio:number){
      this.mostrar = !this.mostrar;
      this.total += precio
  }

  precios:number[]=[]
 total:number =0 
  valor(precio:number){
    this.total += precio
    // this.precios.push(precio)
    console.log(this.precios)
    // this.calculateTotal()
  }
  enviar(values:string){
    console.log(values)
  }
   calculateTotal() {
    //  this.total = 0
    
    // for(let i = 0; i < this.precios.length; i++ ){
    //     this.total += this.precios[i]; 
    // }
   

    console.log(this.total);

   }
  ngOnInit(): void {
  }

}
