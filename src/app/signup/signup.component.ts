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

  error: string = '';

  regex_password: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;

  updatedForm! : FormGroup;

 constructor( 
  private authService: AuthService, 
  private router:Router, 
  private navAndFoot: NavandfootService,
  private formBuilder: FormBuilder
  ) {} 

  //here i created a method containing our form and validations requirements
  ngOnInit():void 
  { 
    this.updatedForm = this.formBuilder.group({

      username : ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      email :['', [
        Validators.required,
        Validators.email
      ]],

      password :['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.regex_password)
      ]]

    })

    this.navAndFoot.hide();

  }

  onSubmit():void{

    const warning = this.authService.register(this.updatedForm.value)

    if (!warning.error) {

      this.router.navigate(['books'], {

        queryParams: {id: warning.data.id}

      })

    } else {

      alert(this.error = warning.message);

    }

  }

}
