import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  constructor(public peticion:HttpClient) {}

  public consultarZonas():Observable<any>{
    let uri="http://localhost:8080/api/tcc/zonas"
    return this.peticion.get(uri)
  }



}

