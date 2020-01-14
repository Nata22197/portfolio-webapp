import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';
import { URL_SERVICIOS, LOCAL_API } from "../services/url.services";

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) { 

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    
    //leer archivo json
    let url = LOCAL_API + "data-pagina.json";
    this.http.get(url)
        .subscribe( (resp: any)=> {
          this.cargada = true;
          console.log(resp)
          this.info = resp;
        })  

  }

  private cargarEquipo() {

    // Leer el archivo JSON
    let url = URL_SERVICIOS + 'equipo.json'
    this.http.get(url)
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      console.log(this.equipo);
    });
  }
}
