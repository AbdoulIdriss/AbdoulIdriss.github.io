import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { NavandfootService } from '../Services/navandfoot.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  error: string | null = 'Email already available';


  updatedForm! : FormGroup;

 constructor( 
  private authService: AuthService, 
  private router:Router, 
  private navAndFoot: NavandfootService,
  private formBuilder:FormBuilder
  ) {} 

  //here i created a method containing our form and validations requirements
  ngOnInit():void 
  { 
    this.updatedForm = this.formBuilder.group({

      username : ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      email : ['', [
        Validators.required,
        Validators.email
      ]],

      password : ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W\w]{8,}/)
      ]]

    })

    this.navAndFoot.hide();

  }

  onSubmit() : void{

    const warning = this.authService.register(this.updatedForm.value)

    if (warning.error === true) {

      alert(this.error)

    } else {

      this.router.navigate(['books']);
    }

  }

}
