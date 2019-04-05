import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProyectosService } from './services/proyectos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor( public infoPaginaService: InfoPaginaService,
               public proyectosService: ProyectosService ) {

  }
}
