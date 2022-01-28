import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-mi-reserva',
  templateUrl: './mi-reserva.component.html',
  styleUrls: ['./mi-reserva.component.css']
})
export class MiReservaComponent implements OnInit {

  @Input() reserva: any
  constructor( private _hs:HorariosService) { }

  ngOnInit(): void {

    
  }


  onEnviarEmail(){

    const mail = {
    to: this.reserva.titularReserva[0].email ,
  from: environment.email,
  subject: "Turno App",
  text: `<b>Reserva<b><br>
        <table>
        <tr>
        <td>Número: ${this.reserva.id}</td>
        <td>Día: ${this.reserva.fecha}</td>
        <td>Horario: ${this.reserva.horario}</td>
        </tr>
        <tr>
        <td>Títular reserva: ${this.reserva.titularReserva[0].nombre}</td>
        </td>
        </tr>
        </table>
        <br>
        <br>
        <p>Podrá utilizar el número de reserva para chequear datos adicionales en https://altovalleweb.github.io/mi-turno</p>
        `
    }

    this._hs.sendEmail(mail).subscribe(
      ()=>alert('Email enviado correctamente!'),
      (error) => { console.log(error); alert('Ocurrio un error al intentar enviar el email!')}
    )
  }

}
