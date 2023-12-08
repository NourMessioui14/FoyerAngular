import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChambresComponent} from "./Chambre/chambres/chambres.component";
import {DetailsChambreComponent} from "./Chambre/details-chambre/details-chambre.component";
import {AddChambreComponent} from "./Chambre/add-chambre/add-chambre.component";
import {UpdateChambreComponent} from "./update-chambre/update-chambre.component";

const routes: Routes = [
  { path:"", redirectTo: "sidebar", pathMatch: "full"},
  {path: "chambres", component: ChambresComponent},
 {path:'search/:searchItem', component:ChambresComponent},
  {path:'details/:id', component:DetailsChambreComponent},
  {path:'add',component:AddChambreComponent},
  {path:'update/:id',component:UpdateChambreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
