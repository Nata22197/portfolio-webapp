import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ItemComponent } from './pages/item/item.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const app_routes: Routes = [
    { path: 'inicio', component: PortafolioComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'proyectos_items/:id', component: ItemComponent },
    { path: 'busqueda/:cadena', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
    imports:[
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting{

}