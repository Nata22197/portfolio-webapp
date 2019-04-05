import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public proyectoService: ProyectosService ) { }

  ngOnInit() {
    this.route.params
        .subscribe( parametros => {
          
          this.proyectoService.buscarProyecto( parametros['cadena'] );
    });
  }

}
