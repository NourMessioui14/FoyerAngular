import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionChambreRoutingModule } from './gestion-chambre-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChambresComponent} from "./chambres/chambres.component";
import {SearchComponent} from "./search/search.component";
import {AddChambreComponent} from "./add-chambre/add-chambre.component";
import {UpdateChambreComponent} from "./update-chambre/update-chambre.component";


@NgModule({
  declarations: [
    ChambresComponent,
    SearchComponent,
    AddChambreComponent,
    UpdateChambreComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    GestionChambreRoutingModule
  ],
  exports : [
    ChambresComponent
  ]
})
export class GestionChambreModule { }
