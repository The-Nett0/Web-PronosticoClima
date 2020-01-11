import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() emisor = new EventEmitter<void>();
  conectado:boolean = false;

  constructor() {
    
   }

  ngOnInit() {
  }

  emitir(){
    this.emisor.emit();
  }

}
