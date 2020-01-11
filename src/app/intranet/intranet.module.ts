import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './componentes/home/home.component';
import { IntranetComponent } from './intranet.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { LugaresComponent } from './componentes/lugares/lugares.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { IntraRoutes } from './intraRoutes.module'

//importando material
import { MaterialModule } from '../material.module'

// importando modulo de AGM angular maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    HomeComponent,
    IntranetComponent,
    ToolbarComponent,
    LugaresComponent,
    MapaComponent
  ], 

  imports: [
    CommonModule, 
    IntraRoutes,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5WXDrSXz_x8UtOPveJfRhc3ucEdOJJbo'
    })
  ],
  entryComponents:[MapaComponent]
})
export class IntranetModule { }
