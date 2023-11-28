import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'foyer',loadChildren: ()=> import('./foyer/foyer.module').then(m=>m.FoyerModule)},
  {path:'user',loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
