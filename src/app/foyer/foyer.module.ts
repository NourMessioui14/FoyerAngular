import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { ListfoyerComponent } from './listfoyer/listfoyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoyerService } from '../Core/Services/foyer.service';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './updatefoyer/updatefoyer.component';

@NgModule({
  declarations: [
    ListfoyerComponent,
    AddfoyerComponent,
    UpdatefoyerComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FoyerService] // Provide the service, not the module
})
export class FoyerModule { }
