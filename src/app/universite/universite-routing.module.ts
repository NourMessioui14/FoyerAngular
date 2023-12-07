import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListComponent } from './universite-list/universite-list.component'; 
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';

const routes: Routes = [
  {path:"universite-list", component: UniversiteListComponent},
  {path:"add-universite", component: AddUniversiteComponent},
  {path:"edit-universite/:id", component: EditUniversiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
