import { Component } from '@angular/core';
import { NavandfootService } from '../Services/navandfoot.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor (public navAndFoot: NavandfootService, library:FaIconLibrary){} 

}
