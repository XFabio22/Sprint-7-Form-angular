import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  paginasYIdiomas:FormGroup;


  constructor(private _builder : FormBuilder) { 
    this.paginasYIdiomas = this._builder.group({
      paginas:['1',Validators.required],
      idiomas:['1',Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

}
