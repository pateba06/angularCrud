import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDashboardComponent } from './crud/employee-dashboard/employee-dashboard.component';
import { RouteGuardComponent } from './angular-route-guard/route-guard/route-guard.component';



const appRoutes:Routes= [
  { redirectTo: 'home',
   path:'',
   pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'crud',component: EmployeeDashboardComponent},
  { path: 'route-guard',
   loadChildren:() => 
   import('./angular-route-guard/route-guard/route-guard.module').then((m) => m.RouteGuardModule)}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }