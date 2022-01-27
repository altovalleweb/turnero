import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-reserva',
  templateUrl: './mi-reserva.component.html',
  styleUrls: ['./mi-reserva.component.css']
})
export class MiReservaComponent implements OnInit {

  @Input() reserva: any
  constructor() { }

  ngOnInit(): void {

    
  }

}
