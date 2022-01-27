import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  deshabilitarTurnos:boolean=true

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )   
    .subscribe( (event:any) => {
      if (event.url=="/"){
        this.deshabilitarTurnos=true
      }else{
        this.deshabilitarTurnos=false
      }
        
    });
  }



}
