import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"bloc",loadChildren: ()=>import('./bloc/bloc.module').then(m=>m.BlocModule)},
  {path:"universite",loadChildren: ()=>import('./universite/universite.module').then(m=>m.UniversiteModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
