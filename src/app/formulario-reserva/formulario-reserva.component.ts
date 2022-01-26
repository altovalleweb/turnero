import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit, OnChanges {

  @Input() horarioReserva:any
  @Input() fechaReserva!:Date
  @Input() estaProcesandoReserva:boolean = false


  @Output() reservaEvent:  EventEmitter<any> = new EventEmitter();
  

  lugaresDisponibles:number[]=[]

  titularReserva: FormGroup = this.fb.group({
    dni:['',Validators.required],
    nombre:['',Validators.required],
    email:['',Validators.required]
  })
  
  reservasForm =  this.fb.group({   
    fecha: ['', Validators.required],
    idHorario: [''],
    horario: ['', Validators.required],
    titularReserva : this.fb.array([this.titularReserva]),
    adicionalesReserva: this.fb.array([])
  })

  constructor(private fb:FormBuilder) { 
  
  }



  

  ngOnChanges(changes: SimpleChanges){
    //this.adicionalesReservaField.clear(); 

    if(this.horarioReserva){
      this.horarioField.setValue(this.horarioReserva.horario)
      this.idHorarioField.setValue(this.horarioReserva.id)
    }

    if(this.fechaReserva){
      this.fechaField.setValue(moment(this.fechaReserva).format('YYYY-MM-DD') );
    }
    
   

  }

  


  ngOnInit(): void {

  }

  get idHorarioField(){
    return this.reservasForm.controls.idHorario
  }

  get fechaField(){
    return this.reservasForm.controls.fecha
  }

  get horarioField(){
    return this.reservasForm.controls.horario
  }

  get titularReservaField():FormArray {
    return this.reservasForm.controls["titularReserva"] as FormArray;
  }

  get adicionalesReservaField():FormArray {
    return this.reservasForm.controls["adicionalesReserva"] as FormArray;
  }

 
  addAdicionalReserva() {

    if(this.horarioReserva){
      if ( this.adicionalesReservaField.length+1<this.horarioReserva.disponibilidad){
        const adicionalReservaForm:FormGroup = this.fb.group( {
          dni:['',Validators.required],
        nombre:['',Validators.required]   }
        );
    
        this.adicionalesReservaField.push(adicionalReservaForm);
      }
      else{
        alert('Supera el máximo disponible')
      }
    }
    else{
      alert('Debe seleccionar un horario')
    }

   
  }

  deleteAdicionalReserva(reservaIndex:number){
    this.adicionalesReservaField.removeAt(reservaIndex);
  }






  onSubmit(event:Event){
    event.preventDefault();

    if(this.reservasForm.valid && this.adicionalesReservaField.length+1<=this.horarioReserva.disponibilidad){      
      this.reservaEvent.emit(this.reservasForm.value)
    }else{
      alert('Error. El total reservas superan la disponibilidad del horario!')
    }
  }

}
