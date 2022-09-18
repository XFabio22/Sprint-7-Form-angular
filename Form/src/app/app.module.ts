import { PreciosService } from './service/Precios.service';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent
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
