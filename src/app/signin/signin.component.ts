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

  error: string | null = null;


  updatedForm! : FormGroup;

 constructor(  
  private authService:AuthService, 
  private router:Router, 
  public navAndFoot: NavandfootService,
  private formBuilder: FormBuilder
  ) {} 

  ngOnInit():void { 

    this.updatedForm = this.formBuilder.group({

      email : ['', [
        Validators.required,
        Validators.email
      ]],

      password : ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
      ]]

    })

    this.navAndFoot.hide();
    
  }

  onSubmit():void{

    console.log(this.updatedForm);
    
    const form = this.updatedForm.value;
     
    const checkMail = this.authService.logCheck(form.email , form.password)

    if (checkMail) {

    // this.router.navigate[('books')]
           
    } else {
      
      alert('info does not match');
    }

  }

}
