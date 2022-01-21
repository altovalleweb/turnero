import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  @Input() horariosDisponibles: any[] = [];
  @Input() fechaSeleccionada: any;


  @Output() seleccionHorarioEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSeleccionarHorario(horario:any){
    this.seleccionHorarioEvent.emit(horario)
  }
}
