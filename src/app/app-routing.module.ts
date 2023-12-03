import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocListComponent } from './bloc/bloc-list/bloc-list.component';
import { AddBlocComponent } from './bloc/add-bloc/add-bloc.component';
import { EditBlocComponent } from './bloc/edit-bloc/edit-bloc.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';

const routes: Routes = [
  {path:"bloc-list", component: BlocListComponent},
  {path:"add-bloc", component: AddBlocComponent},
  {path:"edit-bloc/:id", component: EditBlocComponent},
  {path:"universite-list", component: UniversiteListComponent},
  {path:"add-universite", component: AddUniversiteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
