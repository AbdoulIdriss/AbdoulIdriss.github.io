import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NavandfootService } from '../auth/Services/navandfoot.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor (
    public navAndFoot: NavandfootService, 
    library:FaIconLibrary
    ){} 
  
}
