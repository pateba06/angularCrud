import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DashoboardComponent } from './dashoboard/dashoboard.component';

import { RouteGuardComponent } from './route-guard.component';


const routes :Routes= [
   {path:'', 
   component: RouteGuardComponent,
   children: [
      {
         path:'',
         component:RouteGuardComponent
      },
      {
         path:'dashboard',
         component:DashoboardComponent
      }
   ]}]

   

   

@NgModule({

   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]

})
export class RouteGuardRoutingModule { }
