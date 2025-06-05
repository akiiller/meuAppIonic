import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TruncatePipe } from '../pipes/truncate.pipe'; // <--- IMPORTAR AQUI (ajuste o caminho se necessário)


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [ HomePage,
    TruncatePipe]
})
export class HomePageModule {}
