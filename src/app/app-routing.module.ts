import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", redirectTo: "sidebar", pathMatch: "full"},
  {
    path: 'chambres',
    loadChildren: () => import('./gestion-chambre/gestion-chambre.module').then(m => m.GestionChambreModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
