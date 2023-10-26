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

  regex_password: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;

  registerForm!: FormGroup ;

  saveError: string = '';

  constructor (

    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public navAndFoot: NavandfootService,

  ) {}


  ngOnInit(): void {
    
    this.navAndFoot.hide();

    this.registerForm = this.formBuilder.group({
    
      username: new FormControl ('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),

      firstname:  new FormControl ('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]),

      lastname: new FormControl ('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]),

      email: new FormControl ('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regex_password)
      ])

    })

  }

  onSubmit(): void {

    const save = this.authService.register(this.registerForm.value);

    if (!save.error) {

      localStorage.setItem('auth', JSON.stringify(save.data))

      this.router.navigate(['body'], {

        queryParams: {id: save.data.id}

      })
    } else {

      this.saveError = save.message
      
    }
  }

}
