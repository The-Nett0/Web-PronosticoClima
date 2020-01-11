import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntranetComponent } from './intranet.component';
import { HomeComponent } from './componentes/home/home.component';
import { LugaresComponent } from './componentes/lugares/lugares.component';
import { MapaComponent } from './componentes/mapa/mapa.component';


const intraRoutes: Routes = [
    {
      path:'',
      component:IntranetComponent,
      children:[
        {
          path:'',
          component:HomeComponent
        },
        {
          path:'lugares',
          component:LugaresComponent
        },
        {
          path:'mapa',
          component:MapaComponent
        }

      ]
    }
  ]

@NgModule({
    imports: [RouterModule.forChild(intraRoutes)],
        
    
    exports: [
        RouterModule
    ],
    declarations: []
})
export class IntraRoutes { }