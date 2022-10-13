import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { ListComponent } from './layout/publico/privado/user/list/list.component';
import { TransaccionesbancariasComponent } from './layout/publico/privado/transaccionesbancarias/transaccionesbancarias.component';
import { TransaccionesatipicasComponent } from './layout/publico/privado/transaccionesatipicas/transaccionesatipicas.component';
import { PrivadoComponent } from './layout/publico/privado/privado.component';


console.log('este es el tipo de usuario',sessionStorage.getItem('tipoUsuario'));

const routes: Routes = [

  {path:'administrador',component:PrivadoComponent},
  {path:'administrador/usuarios',component:ListComponent},

  {path:'cliente',component:PrivadoComponent},
  {path:'cliente/trasansacciones-atipicas',component:TransaccionesatipicasComponent},
  {path:'cliente/trasansacciones-bancarias',component:TransaccionesbancariasComponent},

  
  {path:'',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
