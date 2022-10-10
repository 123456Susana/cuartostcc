import { Component, OnInit } from '@angular/core';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datosZonas:any[]=[];

  constructor(public servicioZona: ZonasService) {
    this.servicioZona.consultarZonas()
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.datosZonas=respuesta
    })
  }

  ngOnInit(): void {
  }

}
