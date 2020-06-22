import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPrecioPageRoutingModule } from './lista-precio-routing.module';

import { ListaPrecioPage } from './lista-precio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPrecioPageRoutingModule
  ],
  declarations: [ListaPrecioPage]
})
export class ListaPrecioPageModule {}
