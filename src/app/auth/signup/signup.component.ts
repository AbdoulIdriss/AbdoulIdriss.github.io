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
  registerForm: FormGroup = new FormGroup({});
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
    
      username:['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],

      firstname:['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],

      lastname:['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.pattern(this.regex_password)
      ]]

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
