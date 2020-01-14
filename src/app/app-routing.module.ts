import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const app_routes: Routes = [
    { path: 'inicio', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
    imports:[
        RouterModule.forRoot( app_routes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting{

}