import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavandfootService } from '../auth/Services/navandfoot.service';
import { LocalstorageService } from '../auth/Services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor (
    public navAndFoot: NavandfootService, 
    library:FaIconLibrary,
    private localStorage:LocalstorageService,
    private router:Router,
  ){} 

    //function to check if the user is logged in (to be used to make the signin and logout button appear or disappear)
    checkLog():boolean{
      if (this.localStorage.select('auth')) {
        return true;
      }
      return false;
    }

    //click to redirect to signin
  signin() {
    this.router.navigate(['signin'])
  }

  //click to go to dashboard
  dashboard() {
    this.router.navigate(['dashboard'])
  }
  
  //click to go library
  favorites() {
    this.router.navigate(['library'])
  }

  //logout function
  logout() {

    this.localStorage.removeitem('auth');
    this.router.navigate(['signin'])
  }

}
