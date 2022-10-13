import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Modelo/User';
import { ResultIa } from '../Modelo/ResultIa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  //Url='http://localhost:9194';
  Url='https://backendbancaseguros.azurewebsites.net'
  //UriModelIa='http://127.0.0.1:5000'
  UriModelIa='https://modelotransaccionesatipicas.azurewebsites.net'

  getUsers(){
    return this.http.get<User[]>(this.Url+"/persona");
  }
  addUser(user:User){
    return this.http.post<User>(this.Url+"/persona",user);
  }
  deleteUser(user:User){
    return this.http.delete<User>(this.Url+"/persona/"+user.id);
  }

  login(user:User){
    console.log('esto es el post ',user)
    return this.http.post<User>(this.Url+"/persona/login",user);
  }

  getResultIa(){
    return this.http.get<ResultIa>(this.UriModelIa+"/transaccionesbancariasatipicas");
  }
}
