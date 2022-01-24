import { Component,OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  selected=  new Date(2022, 1, 9);
  title = 'turnero';

  minDate = new Date(2022, 1, 9);
  maxDate = new Date(2022, 1, 13);

  horariosDisponibles=[{horario:'15:00 PM', lugaresDisponibles: 5},
  {horario:'15:30 PM', lugaresDisponibles: 3},
  {horario:'16:00 PM', lugaresDisponibles: 5},
  {horario:'16:30 PM', lugaresDisponibles: 0},
  {horario:'17:00 PM', lugaresDisponibles: 1},
  {horario:'17:30 PM', lugaresDisponibles: 3},
  {horario:'18:00 PM', lugaresDisponibles: 4},
  {horario:'18:30 PM', lugaresDisponibles: 3},
  {horario:'19:00 PM', lugaresDisponibles: 5},
  {horario:'19:30 PM', lugaresDisponibles: 0},
  {horario:'20:00 PM', lugaresDisponibles: 3},
  {horario:'20:30 PM', lugaresDisponibles: 1},
  {horario:'21:00 PM', lugaresDisponibles: 6}]

horarioSeleccionado:any



  onSeleccionarHorario(event:any){
    this.horarioSeleccionado=event
  }
}
