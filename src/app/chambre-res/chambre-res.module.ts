import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreResRoutingModule } from './chambre-res-routing.module';
import { ListResComponent } from './list-res/list-res.component';


@NgModule({
  declarations: [
    ListResComponent
  ],
  imports: [
    CommonModule,
    ChambreResRoutingModule
  ]
})
export class ChambreResModule { }
