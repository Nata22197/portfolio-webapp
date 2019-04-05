import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { ProyectoDescripcion } from "../../interfaces/proyecto-descripcion.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  proyecto: ProyectoDescripcion;
  proyecto_id: string;
  cargado:boolean = true;
  constructor( private route: ActivatedRoute,
               public proyectoService: ProyectosService  ) { }

  ngOnInit() {
    
    this.route.params
          .subscribe( parametros => {
            this.proyectoService.getProyecto(parametros['id'])
                  .subscribe( (proyecto:ProyectoDescripcion) => {
                    
                    this.proyecto_id = parametros['id'];
                    this.proyecto = proyecto;
                    setTimeout(() => {
                      
                      this.cargado = false;

                    }, 300);
                  });
          });
  }

}
