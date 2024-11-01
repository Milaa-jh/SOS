import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounicacionPage } from './counicacion.page';

const routes: Routes = [
  {
    path: '',
    component: CounicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounicacionPageRoutingModule {}
