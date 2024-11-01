import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CounicacionPageRoutingModule } from './counicacion-routing.module';

import { CounicacionPage } from './counicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounicacionPageRoutingModule
  ],
  declarations: [CounicacionPage]
})
export class CounicacionPageModule {}
