
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _sHttp:HttpClient) { }

  obtenerCiudad(name:string):Observable<any>{
    let busqueda = {
      busqueda:name
    }
    let misHeaders:HttpHeaders = new HttpHeaders();
    misHeaders.append("Content-type","application/json");
    console.log('usamos el api de angular maps, aves no responde :(');
    
    return this._sHttp.post('http://localhost:3000/lugar/buscar',busqueda,{ headers:misHeaders }
    )
  }

  obtenerClima(lat,lon){
;
    

    // let parametros = new HttpParams()
    // parametros = parametros.append('lat', lat);
    // parametros = parametros.append('lon', lon);

    // return  this._sHttp.get(`http://localhost:3000/pronostico`, { params: parametros })
    //y esta es la direccion d ebuqueda //http://localhost:3000/pronostico?lat=-5.710000&lon=-79.279999
    let misHeaders:HttpHeaders = new HttpHeaders();
    misHeaders.append("Content-type","application/json");
    console.log('usamos el api de angular maps, aves no responde :(');
    return this._sHttp.get(`http://localhost:3000/pronostico/${lat}/${lon}`,{headers:misHeaders})
    
    
  }

  
}
