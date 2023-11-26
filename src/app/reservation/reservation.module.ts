import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListReservComponent } from './list-reserv/list-reserv.component';
import { AddReservComponent } from './add-reserv/add-reserv.component';
import { FormsModule } from '@angular/forms';
import { UpdateReservComponent } from './update-reserv/update-reserv.component';


@NgModule({
  declarations: [
    ListReservComponent,
    AddReservComponent,
    UpdateReservComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule
  ]
})
export class ReservationModule { }
