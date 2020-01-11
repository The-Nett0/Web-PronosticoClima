import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  lat: number = -9.1899672;
  lng: number = -75.015152;




  constructor( public dialogRef:MatDialogRef<MapaComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any ){ 
      this.lat = +data.lat;
      this.lng = +data.lon;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
