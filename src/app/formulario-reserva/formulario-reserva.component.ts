import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit, OnChanges {

  @Input() horarioReserva:any
  @Input() fechaReserva!:Date
  

  lugaresDisponibles:number[]=[]

  titularReserva: FormGroup = this.fb.group({
    dni:['',Validators.required],
    nombre:['',Validators.required],
    email:['',Validators.required]
  })
  reservasForm: FormGroup = this.fb.group({    
    titularReserva : this.fb.array([this.titularReserva]),
    adicionalesReserva: this.fb.array([])
  })

  constructor(private fb:FormBuilder) { 
    
  }

  

  ngOnChanges(changes: SimpleChanges){
   
    this.adicionalesReservaField.clear(); 
  }

  


  ngOnInit(): void {
 
  }

  get titularReservaField():FormArray {
    return this.reservasForm.controls["titularReserva"] as FormArray;
  }

  get adicionalesReservaField():FormArray {
    return this.reservasForm.controls["adicionalesReserva"] as FormArray;
  }

 
  addAdicionalReserva() {

    if(this.horarioReserva){
      if ( this.adicionalesReservaField.length+1<this.horarioReserva.lugaresDisponibles){
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

  }

}
