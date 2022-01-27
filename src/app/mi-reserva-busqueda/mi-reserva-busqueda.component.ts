import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-mi-reserva-busqueda',
  templateUrl: './mi-reserva-busqueda.component.html',
  styleUrls: ['./mi-reserva-busqueda.component.css']
})
export class MiReservaBusquedaComponent implements OnInit {

  busquedaForm: FormGroup = this._fb.group({
    idReserva: ['',Validators.required]
  })

  reserva:any = null

  busquedaRealizada:boolean = false
  constructor(private _fb:FormBuilder, private _hs:HorariosService) { }

  ngOnInit(): void {

  }


  onSubmit(event:Event){
    event.preventDefault()
    if(this.busquedaForm.valid){
      this.busquedaRealizada = false     

      this._hs.getReserva(this.busquedaForm.value.idReserva).subscribe(
        reservaResult => {this.reserva = reservaResult.reserva; this.busquedaRealizada=true}
      )
    }
  }

}
