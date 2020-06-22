import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPrecioPage } from './lista-precio.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPrecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPrecioPageRoutingModule {}
