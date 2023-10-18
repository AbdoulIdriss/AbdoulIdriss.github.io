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

  error: string = '';

  regex_password: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;

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
        Validators.pattern(this.regex_password)
      ])

    })

    this.navAndFoot.hide();

  }

  onSubmit(){

    const warning = this.authService.register(this.updatedForm.value)

    if (!warning.error) {

      this.router.navigate(['dashboard'], {

        queryParams: {id: warning.data.id}
      })

    } else {

      this.error = warning.message
      
    }

  }

}
