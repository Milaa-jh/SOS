import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonSOSPage } from './boton-sos.page';

const routes: Routes = [
  {
    path: '',
    component: BotonSOSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonSOSPageRoutingModule {}
