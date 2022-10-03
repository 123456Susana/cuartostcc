import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {
    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['Susana',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['Natural',[Validators.required]],
      idremitente:['123456789',[Validators.required]],
      nombreremitente:['TCC',[Validators.required]],
      deptoremitente:['Antioquia',[Validators.required]],
      municipioremitente:['Itagui',[Validators.required]],
      direccionremitente:['cr 50 sur #10-20',[Validators.required]],
      tipodestinatario:['empresa',[Validators.required]],
      iddestinatario:['1112131415',[Validators.required]],
      nombredestinatario:['COMFAMA',[Validators.required]],
      deptodestinatario:['Antioquia',[Validators.required]],
      municipiodestinatario:['Medellin',[Validators.required]],
      direcciondestinatario:['cll 50#32-20',[Validators.required]],
    })
  }

}
