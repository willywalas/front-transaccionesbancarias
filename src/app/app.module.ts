import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './layout/publico/login/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './layout/publico/privado/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { TransaccionesbancariasComponent } from './layout/publico/privado/transaccionesbancarias/transaccionesbancarias.component';
import { TransaccionesatipicasComponent } from './layout/publico/privado/transaccionesatipicas/transaccionesatipicas.component';
import { SignupComponent } from './layout/publico/login/signup/signup.component';
import { ListComponent } from './layout/publico/privado/user/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    TransaccionesbancariasComponent,
    TransaccionesatipicasComponent,
    SignupComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
