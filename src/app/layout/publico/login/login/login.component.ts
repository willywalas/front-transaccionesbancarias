import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

import { User } from 'src/app/Modelo/User';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User()
  tipoUsuario = sessionStorage.getItem('tipoUsuario');
  public myForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginProvid:AutenticacionService, private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    //this.myForm = this.createMyForm();
  }
  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario:['',Validators.required],
      password:['']
    });
  }
  saveUser(user:User){
    console.log(user)
    this.service.addUser(user={id:user.id,email:user.email,password:user.password,lastname:user.lastname,name:user.name,tipeuser:'2'})
    .subscribe(data=>{
      alert("Se Agrego con éxito.... !!!");
      this.router.navigate([""]);
    })

  }

  signIn(user:User){
    console.log('esto es el cuerpo del user ',user)
    this.service.login(user)
      .subscribe(
        (response)=>{
        this.user = response;
        
        sessionStorage.setItem('nombre', this.user.name);
        sessionStorage.setItem('tipoUsuario', this.user.tipeuser);
        
        if(this.user.tipeuser=='1'){
          this.router.navigateByUrl('/administrador', { skipLocationChange: false }).then(() => {
            this.router.navigate(['administrador']);
            window.location.reload();
          });
        }
        if(this.user.tipeuser=='2'){
          this.router.navigateByUrl('/cliente', { skipLocationChange: false }).then(() => {
            this.router.navigate(['cliente']);
            window.location.reload();
          });
        }

        
  },
        (error) => {                            
          alert("Credenciales Invalidas");
    
        }
  )
  }

  /*public submitFormulario(){
    console.log(this.myForm.invalid)
    if(this.myForm.invalid){
      return;
    }
    
    if(!this.loginProvid.ingresarAplicativo(this.myForm.value)){
alert("usuario y contraseña invalidos")
    }
  }*/

}
