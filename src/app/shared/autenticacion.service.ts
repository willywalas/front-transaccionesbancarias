import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar:boolean = false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'admin' && obj.password=='123'
    return this.ingresar;
  }

  public habilitarlogeo(){
    return this.ingresar;
  }
}
