import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ListfoyerComponent } from '../foyer/listfoyer/listfoyer.component';
import {ListuserComponent} from "./listuser/listuser.component";
import {AdduserComponent} from "./adduser/adduser.component";

const routes: Routes = [
  {path:'auth', component:AuthentificationComponent},
  { path: 'listfoyer', component: ListfoyerComponent },
  { path: 'listuser', component: ListuserComponent },
  { path: 'adduser', component: AdduserComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
