import { Component } from '@angular/core';
import { AutenticacionService } from './shared/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tipoUsuario = sessionStorage.getItem('tipoUsuario');

  
  title = 'front-transaccionesbancarias';

  constructor(private loginPrd:AutenticacionService,private router:Router){

  }
  /*public visualizarMenu():boolean{
    
return this.loginPrd.habilitarlogeo();
  }*/
  atypicalTransactions(){
    this.router.navigate(["cliente/trasansacciones-atipicas"]);
  }
  bankTransactions(){
    this.router.navigate(["cliente/trasansacciones-bancarias"]);
  }
  listUsers(){
    this.router.navigate(["administrador/usuarios"]);
  }
  home(){
    if(this.tipoUsuario=='1'){
      this.router.navigate(["administrador"]);
    }
    if(this.tipoUsuario=='2'){
      this.router.navigate(["cliente"]);
    }
    
  }
  singOut(){
    sessionStorage.clear();

    this.router.navigateByUrl('', { skipLocationChange: false }).then(() => {
      this.router.navigate(['']);
      window.location.reload();
    });
    
  }
}
