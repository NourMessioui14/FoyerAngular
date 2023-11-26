import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReservComponent } from './list-reserv/list-reserv.component';
import { reservation } from '../Models/reservation';
import { AddReservComponent } from './add-reserv/add-reserv.component';
import { UpdateReservComponent } from './update-reserv/update-reserv.component';

const routes: Routes = [

  {path:"list-reservation",component:ListReservComponent},
  {path:"add_reservation",component:AddReservComponent},
  { path: 'update/:id', component: UpdateReservComponent }, // :id est le paramètre pour l'ID de la réservation
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
