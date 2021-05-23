import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './crud/employee-dashboard/employee-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CrudserviceService } from './crud/crudservice.service';


@NgModule({
   declarations: [
      AppComponent,
      EmployeeDashboardComponent,
      HomeComponent
   ],
   imports: [
	 BrowserModule,
	 FormsModule,
	 ReactiveFormsModule,
	 HttpClientModule,
	 AppRoutingModule,
	],
   providers: [CrudserviceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
