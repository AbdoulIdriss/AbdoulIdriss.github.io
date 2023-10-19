import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { UserInterface } from '../signup/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorage: LocalstorageService) { }

  emailError: null | undefined | string = null;

  verifyEmail( email:string ): string | null {

    let verifiedEmail : boolean = false ;

    const users: Array<UserInterface> = this.localStorage.select('users')

    if (users) {

      for (let i = 0; i < users.length; i++) {

        const actualUser = users[i]; 
        
        if (actualUser.email === email) {
          
          verifiedEmail = true;

          break;

        }
      }
    }

    return verifiedEmail? 'Email already exist' : null;

  }

  //getting the precise Date
  private getCurrentDate():string {

    const date = new Date();

    const createdAt = date.getUTCFullYear() + '_' +
    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '_' +
    ('00' + date.getUTCDate()).slice(-2) + '_' +
    ('00' + date.getUTCHours()).slice(-2) + ':' +
    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
    ('00' + date.getUTCSeconds()).slice(-2)

    return createdAt;

  }

  //sign up with date and verifying email

  register( user:any ) {

    const checkmail = this.verifyEmail(user.email);

    if (checkmail) {

      return {
        error:true,
        message:checkmail
      }
    }

    let users: Array<UserInterface> = this.localStorage.select('users') ?? [];

    user['id'] = Date.now
    user['createdAT'] = this.getCurrentDate();
    
    users.push(user);

    this.localStorage.insert('users', users);

    return {
      error:false,
      message:'Profile Sucessfully created',
      data:user
    }
  } 

  //Login

  logCheck( email:string , password:string )  {

    let verifylog : UserInterface | null = null;

    const users: Array<UserInterface> = this.localStorage.select('users')

    if (users) {

      for (let i = 0; i < users.length; i++) {

        const logedUser = users[i]; 
        
        if (logedUser.email === email && logedUser.password === password) {
          
          verifylog = logedUser;

          break;

        }
      }
    }

    if (verifylog) {
      
      this.localStorage.insert('auth' , verifylog);

      return {

        error: false,
        message: "Logged succesfully",
        data:verifylog
      }
    }

    return {
      error:true,
      message: 'invalid Credentials'
    }

  }

  auth(){

    const user:any = this.localStorage.select('auth');

    if (user) {
      return {
        error:false,
        message:'user authenticate',
        data:user
      }
    }
    return {
      error:true,
      message:'User not authenticate'
    }
  }

}
