import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected!: Date | null;
  title = 'turnero';

  minDate = new Date(2022, 1, 9);
  maxDate = new Date(2022, 1, 13);

  horariosDisponibles=[{horario:'15:00 PM'},
  {horario:'15:30 PM'},
  {horario:'16:00 PM'},
  {horario:'16:30 PM'},
  {horario:'17:00 PM'},
  {horario:'17:30 PM'},
  {horario:'18:00 PM'},
  {horario:'18:30 PM'},
  {horario:'19:00 PM'},
  {horario:'19:30 PM'},
  {horario:'20:00 PM'},
  {horario:'20:30 PM'}]

}
