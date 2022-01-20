import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit, OnChanges {

  @Input() horarioReserva:any
  @Input() fechaReserva!:Date
  

  lugaresDisponibles:number[]=[]

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(this.horarioReserva){
      this.lugaresDisponibles = [ ...Array(this.horarioReserva.lugaresDisponibles).keys() ].map( i => i+1);
    }
  }


  ngOnInit(): void {
  }

}
