import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { ListeEtudComponent } from './liste-etud/liste-etud.component';


@NgModule({
  declarations: [
    ListeEtudComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule
  ]
})
export class EtudiantsModule { }
