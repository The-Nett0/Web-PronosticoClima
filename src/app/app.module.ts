import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';



//import { IntranetComponent } from './intranet/intranet.component';
//import { HomeComponent } from './intranet/componentes/home/home.component';
//import { LugaresComponent } from './intranet/componentes/lugares/lugares.component';
//import { ToolbarComponent } from './intranet/componentes/toolbar/toolbar.component';
//import { MapaComponent } from './intranet/componentes/mapa/mapa.component';

//importando material
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
