import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaNotificacionComponent } from './notification/nueva-notificacion/nueva-notificacion.component';

const routes: Routes = [
  {
    path: 'notifications', component: NuevaNotificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
