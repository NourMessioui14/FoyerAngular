import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UniversiteService } from '../core/services/universite/universite.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversiteListComponent,
    AddUniversiteComponent,
    EditUniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers:[UniversiteService]
})
export class UniversiteModule { }
