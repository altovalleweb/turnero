import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operacion-exitosa',
  templateUrl: './operacion-exitosa.component.html',
  styleUrls: ['./operacion-exitosa.component.css']
})
export class OperacionExitosaComponent implements OnInit {

  reserva:any
  constructor(private router:Router/* ,private route: ActivatedRoute */) {

    const state = this.router.getCurrentNavigation()?.extras.state

    if(state){
      this.reserva ={id:state.id, ... state.reserva} 
    }
    
    
    
    
   }

  ngOnInit(): void {

   
       }

}
