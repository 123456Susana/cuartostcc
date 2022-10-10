import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MercanciaComponent } from './mercancia/mercancia.component';
import { HomeComponent } from './home/home.component';
import { FormularioregistroComponent } from './formularioregistro/formularioregistro.component';

import{ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule} from  '@angular/common/http'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MercanciaComponent,
    HomeComponent,
    FormularioregistroComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
