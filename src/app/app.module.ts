import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './layout/publico/login/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './layout/publico/privado/index/index.component';

import { TransaccionesbancariasComponent } from './layout/publico/privado/transaccionesbancarias/transaccionesbancarias.component';
import { TransaccionesatipicasComponent } from './layout/publico/privado/transaccionesatipicas/transaccionesatipicas.component';
import { SignupComponent } from './layout/publico/login/signup/signup.component';
import { ListComponent } from './layout/publico/privado/user/list/list.component';
import { PrivadoComponent } from './layout/publico/privado/privado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    TransaccionesbancariasComponent,
    TransaccionesatipicasComponent,
    SignupComponent,
    ListComponent,
    PrivadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
