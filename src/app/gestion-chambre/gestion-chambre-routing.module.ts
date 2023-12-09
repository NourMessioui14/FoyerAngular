import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChambresComponent} from "./chambres/chambres.component";
import {SearchComponent} from "./search/search.component";
import {AddChambreComponent} from "./add-chambre/add-chambre.component";
import {UpdateChambreComponent} from "./update-chambre/update-chambre.component";

const routes: Routes = [
  {path: '', component: ChambresComponent},
  { path: 'search/:searchItem', component: SearchComponent },
  {path:'add',component:AddChambreComponent},
  { path: 'update/:idChambre', component: UpdateChambreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionChambreRoutingModule { }
