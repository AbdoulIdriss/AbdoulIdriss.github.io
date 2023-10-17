import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { NavandfootService } from '../Services/navandfoot.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  error: string | null = 'Email already available';


  updatedForm! : FormGroup;

  formBuilder = new FormBuilder(); //Always initialize form builder by using this method for forms

 constructor( private authService: AuthService, private router:Router, private navAndFoot: NavandfootService) {} 

  //here i created a method containing our form and validations requirements
  ngOnInit():void 
  { 
    this.updatedForm = this.formBuilder.group({

      username : new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      email : new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W\w]{8,}/)
      ])

    })

    this.navAndFoot.hide();

  }

  onSubmit(){

    const warning = this.authService.register(this.updatedForm.value)

    if (warning.error === true) {

      alert(this.error)

    } else {

      this.router.navigate(['books']);
    }

  }

}
