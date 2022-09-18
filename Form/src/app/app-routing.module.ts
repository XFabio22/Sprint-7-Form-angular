import { PanellComponent } from './panell/panell.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const Approutes: Routes = [
  
  {
    path:'Welcome',
    component:WelcomeComponent,
    pathMatch:'full'},

  {
    path:'Home' ,
    component:HomeComponent
  },
  // {
  //   path:'Panel',
  //   component:PanellComponent
  // },
  {
    path :'**',
    redirectTo:'Welcome'
}
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
