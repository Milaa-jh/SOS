import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonSOSPageRoutingModule } from './boton-sos-routing.module';

import { BotonSOSPage } from './boton-sos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonSOSPageRoutingModule
  ],
  declarations: [BotonSOSPage]
})
export class BotonSOSPageModule {}
