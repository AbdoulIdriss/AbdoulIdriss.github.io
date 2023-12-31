import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { UserInterface } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorage: LocalstorageService) { }

  private emailExist(email: string): string | null {

    let email_exist: boolean = false;
    const users: Array<UserInterface> = this.localStorage.select('users');
    if (users) {

      for (let i = 0; i < users.length; i++) {
        const current_user = users[i];
        if (current_user.email == email) {

          email_exist = true;
          break;
        }
      }
    }

    return email_exist ? 'Email already exist !!!' : null;
  }

  private userName(username: string): string | null {

    let username_exist: boolean = false;

    const users: Array<UserInterface> = this.localStorage.select('users');

    if (users) {

      for (let i = 0; i < users.length; i++) {

        const current_user = users[i];

        if (current_user.username == username) {

          username_exist = true;
          break;
        }
      }
    }

    return username_exist ? 'Username already exist !!!' : null;
  }

  private getCurrentDate(): string {

    const date = new Date();
    const created_at = date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2) + ':' +
      ('00' + date.getUTCSeconds()).slice(-2);

    return created_at;
  }

  register(user: any) {

    const checkEmail = this.emailExist(user.email);
    const checkUsername = this.userName(user.username)
    
    if (checkEmail && checkUsername ) {

      return {
        error: true,
        message2:checkUsername ,
        message: checkEmail
      }
    }

    if (checkEmail) {
      return {
        error: true,
        message: 'check Email'
      }
    }

    if (checkUsername) {
      return {
        error: true,
        message: 'Username already used'
      }
    }

    let users: Array<UserInterface> = this.localStorage.select('users') ?? [];
    user['id'] = Date.now();
    user['created_at'] = this.getCurrentDate();
    delete user.confirm_password;
    users.push(user);

    this.localStorage.insert('users', users);

    return {
      error: false,
      message: 'User created successfuly !!!',
      data: user
    }
  }

  login(email: string, password: string) {

    const users: Array<UserInterface> = this.localStorage.select('users');
    let login_user: UserInterface | null = null;
    if (users) {

      for (let i = 0; i < users.length; i++) {

        const user = users[i];
        if (user.email == email && user.password == password) {

          login_user = user;
          break
        }
      }
    }

    if (login_user) {

      this.localStorage.insert('auth', login_user);
      return {
        error: false,
        message: 'User login successfully !!!',
        data: login_user
      }
    }

    return {
      error: true,
      message: 'Invalid credentials'
    }
  }

  auth() {

    const user: any = this.localStorage.select('auth');
    if (user) {

      return {
        error: false,
        message: 'User authenticate',
        data: user
      }
    }

    return {
      error: true,
      message: 'User not authenticate'
    }
  }

}
