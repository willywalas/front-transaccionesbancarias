import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { AutenticacionService } from 'src/app/shared/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public myForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginProvid:AutenticacionService) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }
  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario:['',Validators.required],
      password:['']
    });
  }

  public submitFormulario(){
    console.log(this.myForm.invalid)
    if(this.myForm.invalid){
      return;
    }
    
    if(!this.loginProvid.ingresarAplicativo(this.myForm.value)){
alert("usuario y contraseña invalidos")
    }


  }

}
