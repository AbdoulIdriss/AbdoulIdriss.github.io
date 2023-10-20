import { Component, OnInit } from '@angular/core';
import { NavandfootService } from '../auth/Services/navandfoot.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  ngOnInit(): void {
  this.nav.show()
  }
  constructor(

    public nav : NavandfootService
    
  ){}

}
