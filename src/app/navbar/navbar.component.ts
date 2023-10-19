import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavandfootService } from '../auth/Services/navandfoot.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor (
    public navAndFoot: NavandfootService, 
    library:FaIconLibrary
  ){} 
}
