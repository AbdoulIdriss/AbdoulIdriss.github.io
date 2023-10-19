import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { NavandfootService } from '../Services/navandfoot.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({});
  loginError: string = '';

  constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public navAndFoot: NavandfootService,
  ) {}

  ngOnInit(): void {
    
    this.navAndFoot.hide();

    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required
      ]]
    })
  }

  private clearError (): void {
     setTimeout(() => {
      this.loginError = ''
     }, 2000);
  }

  onSubmit() {

    const form = this.loginForm.value;
    const login = this.authService.login(form.email, form.password)
    if (login.error) {

      this.loginError = login.message;
      this.clearError();
    } else {

      this.router.navigate(['body'], {

        queryParams: {id: login.data?.id}
      })
    }
  }

}
