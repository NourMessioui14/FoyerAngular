import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListfoyerComponent } from './listfoyer/listfoyer.component';
import { AddfoyerComponent } from './addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './updatefoyer/updatefoyer.component';
import {ClientComponent} from "../client/client.component";

const routes: Routes = [
  {path:'listfoyer', component:ListfoyerComponent},
  {path:'addfoyer', component:AddfoyerComponent},
  { path: 'listfoyer/editUser/:id', component: UpdatefoyerComponent },
  { path: 'client', component: ClientComponent }, // Adjust the component name accordingly




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
