import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'; // <-- IMPORTAR AQUI
// Importações do Pipe e da Diretiva
import { TruncatePipe } from './pipes/truncate.pipe'; // <<--- IMPORTAR AQUI
import { HighlightDirective } from './directives/highlight.directive'; // <<--- JÁ DEVE ESTAR AQUI SE SEGUIU O PASSO ANTERIOR

@NgModule({
  declarations: [AppComponent,
    TruncatePipe,
    HighlightDirective ], 
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
