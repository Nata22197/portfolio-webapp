import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {

        this.productosService.buscarProducto( params['termino'] );

      });
  }

}
