import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationModule } from './reservation/reservation.module';

const routes: Routes = [
  {path:"reservation",loadChildren :()=> import ('./reservation/reservation.module').then(m=>m.ReservationModule)},
  {path:"etudiants",loadChildren :() => import ('./etudiants/etudiants.module').then(m=>m.EtudiantsModule)},
  {path:"chambre",loadChildren:() => import('./chambre-res/chambre-res.module').then(m=>m.ChambreResModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
