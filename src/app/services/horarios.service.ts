import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private _http: HttpClient) { }

  getHorarios(): Observable<any>{
    return this._http.get(`${environment.urlApi}/horarios`)
  }

  saveReserva(reserva:any):Observable<any>{
    return this._http.post(`${environment.urlApi}/reservas`,reserva)
  }

  getReserva(idReserva:string):Observable<any>{
    return this._http.get(`${environment.urlApi}/reservas/${idReserva}`)
  }

  sendEmail(email:any):Observable<any>{
    return this._http.post(`${environment.urlApi}/send-email`,email)
  }
}
