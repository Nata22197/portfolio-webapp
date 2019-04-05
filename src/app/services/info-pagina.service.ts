import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';
import { URL_SERVICIOS } from "../services/url.services";

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  cargada:boolean = false;
  proyectos:any[] = [];

  constructor( private http: HttpClient ) { 

          this.cargarInfo();
          this.cargarProyectos();
  }

  private cargarInfo() {
    
    //leer archivo json
    let url = URL_SERVICIOS + "proyectos.json";
    this.http.get(url)
        .subscribe( (resp: any)=> {
          
          this.proyectos = resp;

        })  

  }

  private cargarProyectos() {
    //leer datos del Firebase
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina)=> {
      
      this.cargada = true;
      this.info = resp;

    })  
  }
}
