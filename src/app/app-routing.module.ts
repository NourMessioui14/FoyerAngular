import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path:'foyer',loadChildren: ()=> import('./foyer/foyer.module').then(m=>m.FoyerModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path:'client', component:ClientComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
