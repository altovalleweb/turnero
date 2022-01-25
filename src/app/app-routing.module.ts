import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OperacionExitosaComponent } from './operacion-exitosa/operacion-exitosa.component';

const routes: Routes = [{
  path:'',
  component: AppComponent
},{
  path:'operacion-exitosa/:reservaId',
  component:OperacionExitosaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
