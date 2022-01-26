import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OperacionExitosaComponent } from './operacion-exitosa/operacion-exitosa.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [{
  path:'turnos',
  component: TurnosComponent
},{
  path:'operacion-exitosa/:id',
  component:OperacionExitosaComponent
},
{path: '', redirectTo: '/turnos', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
