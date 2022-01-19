import localeEs from '@angular/common/locales/es';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter'
import {MatCardModule} from '@angular/material/card'
import { registerLocaleData } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { HorariosComponent } from './horarios/horarios.component';
import { FechaPipe } from './fecha.pipe';
import {MatBadgeModule} from '@angular/material/badge';


registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent,
    FechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
  MatMomentDateModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatBadgeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
