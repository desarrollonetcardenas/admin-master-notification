import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-notificacion',
  templateUrl: './nueva-notificacion.component.html'
})
export class NuevaNotificacionComponent implements OnInit {

  success: boolean;
  IsContinuos: boolean;

  constructor() { 
    this.IsContinuos = true;
  }

  ngOnInit(): void {
  }

}
