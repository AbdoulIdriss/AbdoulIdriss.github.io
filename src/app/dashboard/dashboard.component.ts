import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../auth/Services/localstorage.service';
import { NavandfootService } from '../auth/Services/navandfoot.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor( 
    private localStorage: LocalstorageService,
    public navAndFoot: NavandfootService,
  ){}

  ngOnInit(): void {

    this.navAndFoot.show()
  }

  loggedin: any = this.localStorage.select('auth')

}
