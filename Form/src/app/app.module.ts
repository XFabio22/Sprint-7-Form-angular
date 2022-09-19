import { PreciosService } from './service/Precios.service';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { PresupuestoListaComponent } from './presupuesto-lista/presupuesto-lista.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent,
    PresupuestoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [
    PreciosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
