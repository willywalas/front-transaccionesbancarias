import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../../../Service/service.service';
import { User } from 'src/app/Modelo/User';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  users: User[] = [];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    
    this.service.getUsers()
    .subscribe(data=>{
      console.log('esta es la data :',this.users=data);
      this.users=data;
      
    })
  }

  delete(user:User){
    this.service.deleteUser(user)
    .subscribe(data=>{
      this.users=this.users.filter(p=>p!==user);
      alert("Persona Eliminada")
    })
  }



}
