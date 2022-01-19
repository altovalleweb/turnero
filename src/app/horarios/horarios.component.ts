import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  @Input() horariosDisponibles: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
