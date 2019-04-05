import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../services/url.services";
import { Proyecto } from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
    
  cargado:boolean = true;
  proyectos: Proyecto[] = [];
  proyectos_busqueda: Proyecto[] = [];

  constructor( private http: HttpClient ) { 

      this.cargarProyectos();
  
    }

  private cargarProyectos() {
    
    return new Promise( (resolve, reject) => {
        let url = URL_SERVICIOS + "proyectos_idx.json";

          this.http.get(url).
                subscribe(( resp:Proyecto[] ) => {

                  this.proyectos = resp;
                  this.cargado =  false;
                  resolve();
              });
    });

  }

  getProyecto( id:string ) {
    
    let url = URL_SERVICIOS + "proyectos_items/" + id + ".json";
    return this.http.get(url);
  }
  
  buscarProyecto( cadena:string ) {

    if( this.proyectos.length === 0 ) {
      
      this.cargarProyectos().then( ()=> {    
      });
    }else{
      
      this.filtrarProyectos(cadena);
    }

  }
  
  private filtrarProyectos( cadena:string ) {

    this.proyectos_busqueda = [];
    
    cadena = cadena.toLocaleLowerCase();
    this.proyectos.forEach( proy => {
      const tituloLower = proy.titulo.toLocaleLowerCase();

      if( proy.categoria.indexOf( cadena ) >= 0 || tituloLower.indexOf( cadena ) >= 0) {
          this.proyectos_busqueda.push(proy);
      }
    })
  }
}
