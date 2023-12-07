import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { BlocListComponent } from './bloc-list/bloc-list.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { BlocService } from '../core/services/bloc/bloc.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    BlocListComponent,
    EditBlocComponent,
    AddBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [BlocService]

})
export class BlocModule { }
