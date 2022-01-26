import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operacion-exitosa',
  templateUrl: './operacion-exitosa.component.html',
  styleUrls: ['./operacion-exitosa.component.css']
})
export class OperacionExitosaComponent implements OnInit {

  reservaID:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
     this.route.params.subscribe(params => {
      this.reservaID  = params['id'];
    });

    }

}
