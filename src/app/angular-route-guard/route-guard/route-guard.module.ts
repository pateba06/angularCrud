import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteGuardComponent } from './route-guard.component';
import { DashoboardComponent } from './dashoboard/dashoboard.component';
import { EmpComponent } from './emp/emp.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteGuardRoutingModule } from './route-guard-routing.module';

@NgModule({
  imports: [
    CommonModule,RouteGuardRoutingModule
  ],
  declarations: [RouteGuardComponent,DashoboardComponent,EmpComponent,PasswordComponent,ProfileComponent]
})
export class RouteGuardModule { }
