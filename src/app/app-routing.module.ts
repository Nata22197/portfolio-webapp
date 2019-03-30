import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const app_routes: Routes = [
    { path: 'inicio', component: PortafolioComponent },
    { path: 'proyectos', component: ProyectosComponent },
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