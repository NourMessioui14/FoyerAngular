import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ListfoyerComponent } from '../foyer/listfoyer/listfoyer.component';

const routes: Routes = [
  {path:'auth', component:AuthentificationComponent},
  { path: 'listfoyer', component: ListfoyerComponent },


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
