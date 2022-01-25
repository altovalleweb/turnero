import { Component,OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HorariosService } from './services/horarios.service';
import * as moment from 'moment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit,OnDestroy{


  
  selectedDate=  new Date(2022, 1, 9);
  title = 'turnero';

  minDate = new Date(2022, 1, 9);
  maxDate = new Date(2022, 1, 13);

  horariosDisponibles:any[]=[]

  horariosAMostrar:any[]=[]

horarioSeleccionado:any

  subscription!: Subscription


  constructor(private _hs:HorariosService,private router: Router){}

  ngOnInit(){
   this.getHorarios()
  }

  onSelectDate(e:Date){
       const formatedDate = moment(e).format('YYYY-MM-DD') 
       this.setAvailableTimes(formatedDate)      
  }

  setAvailableTimes(dateFormat:string){
    this.horariosAMostrar = this.horariosDisponibles.filter(horario=> horario.fecha == dateFormat).sort((a:any,b:any)=>{ if (a.horario<b.horario){return -1} else{return 1} })
  }

  onSeleccionarHorario(event:any){
    this.horarioSeleccionado=event
  }

  onReserva(event:any){
    this._hs.saveReserva(event).subscribe(
      (reservaReturn)=>{
        console.log(reservaReturn)
        if(+reservaReturn.status==200){
         // alert(`Reserva realizada con exito! Número de reserva: ${reservaReturn.body.reservaId}`)
          this.router.navigate(
            ['/operacion-exitosa'],
            { queryParams: { reservaId: reservaReturn.body.reservaId } }
          );
        }else{
          alert(`Error! ${reservaReturn.body.message} `)
        }
      },
      (error)=>console.error(error),
      ()=> this.getHorarios()
    )
  }


  getHorarios(){
    this.subscription= this._hs.getHorarios().subscribe(
      (horariosR)=> { this.horariosDisponibles=horariosR.horarios; this.onSelectDate(this.selectedDate)},
      (error)=> console.error(error)
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
