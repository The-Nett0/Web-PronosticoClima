import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { MatDialog } from '@angular/material/dialog';
import { MapaComponent } from '../mapa/mapa.component'
import { Router } from '@angular/router';





interface datosCiudades {
  name: ""
type: ""
c: ""
zmw: ""
tz: ""
tzs: ""
l: ""
ll: ""
lat: ""
lon: ""
}

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})

export class LugaresComponent implements OnInit {
  ciudades:Array<datosCiudades> = []; 

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  constructor(private _slugares:ServicesService,public dialog:MatDialog,
    private _sRputer:Router ) { }

  ngOnInit() {
  }

  buscarCiudad(busqueda: string){
  
    
    this._slugares.obtenerCiudad(busqueda).subscribe((rpta)=>{
      
      this.ciudades = rpta.Results;
      
    })
  }

  abrirDialogo(lugar:datosCiudades){
    const dialoRef = this.dialog.open(MapaComponent ,{
      data:lugar
    } )
  }

  verClima( datos:datosCiudades ){

    let lat = datos.lat;
    let lon = datos.lon;

    this._slugares.obtenerClima(lat,lon).subscribe( (rpta)=>{
      console.log(rpta);
      
    })
  }

}
