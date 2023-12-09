import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResComponent } from './list-res/list-res.component';

const routes: Routes = [
  {path:"list-resCham",component:ListResComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreResRoutingModule { }
