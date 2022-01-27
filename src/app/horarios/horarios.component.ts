import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit,OnChanges {

  @Input() horariosDisponibles: any[] = [];
  @Input() fechaSeleccionada: any;


  @Output() seleccionHorarioEvent: EventEmitter<any> = new EventEmitter();

  indexSelected:number =-1;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.indexSelected=-1
  }

  onSeleccionarHorario(horario:any,index:number){
    this.indexSelected=index
    this.seleccionHorarioEvent.emit(horario)

  }
}
