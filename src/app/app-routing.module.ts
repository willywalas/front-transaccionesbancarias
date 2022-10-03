import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { ListComponent } from './layout/publico/privado/user/list/list.component';
import { TransaccionesbancariasComponent } from './layout/publico/privado/transaccionesbancarias/transaccionesbancarias.component';

const routes: Routes = [
  {path:'usuarios',component:ListComponent},
  {path:'trasansacciones-atipicas',component:TransaccionesbancariasComponent},
  {path:'trasansacciones-bancarias',component:TransaccionesbancariasComponent},
  {path:'',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
