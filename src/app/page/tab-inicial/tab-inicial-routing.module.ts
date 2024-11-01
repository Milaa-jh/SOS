import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage, 
    children: [
      {
        path: 'boton-sos',
        loadChildren: () => import('./../../page/boton-sos/boton-sos.module').then( m => m.BotonSOSPageModule)
      },
      {
        path: 'comunicacion',
        loadChildren: () => import('../comunicacion/counicacion.module').then( m => m.CounicacionPageModule)
      },
      {
        path: 'localizacion',
        loadChildren: () => import('./../../page/localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./../../page/contacto/contacto.module').then( m => m.ContactoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
