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
    private router:Router
  ){} 

  //logout function
  logout() {
    this.localStorage.removeitem('auth');
    this.router.navigate(['signIn'])
  }

}
