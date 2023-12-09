import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEtudComponent } from './liste-etud/liste-etud.component';

const routes: Routes = [
  {path:"list-etudiant",component:ListeEtudComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
