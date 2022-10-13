import { Component, OnInit } from '@angular/core';
import { ResultIa } from 'src/app/Modelo/ResultIa';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-transaccionesatipicas',
  templateUrl: './transaccionesatipicas.component.html',
  styleUrls: ['./transaccionesatipicas.component.css']
})
export class TransaccionesatipicasComponent implements OnInit {
  resultIa: ResultIa = new ResultIa;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getResultIa()
    .subscribe(data=>{
      this.resultIa=data;
    })
  }

}
