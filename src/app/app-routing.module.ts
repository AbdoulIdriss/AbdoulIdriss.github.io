import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BooksComponent } from './books/books.component';
import { LibraryComponent } from './library/library.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path:'', redirectTo:'app', pathMatch:'full', title:'Home'},
  { path:'navbar', component:NavbarComponent, },
  { path: '', component:BodyComponent },
  { path: 'body', component:BodyComponent, title:'Home'},
  { path:'footer', component:FooterComponent },
  { path: 'books', component:BooksComponent, title:'Books' },
  { path: 'library', component:LibraryComponent, title:'favorites'},
  { path: 'signin', component:SigninComponent, title:'SignIn'},
  { path: 'signup', component:SignupComponent, title:'SignUp'},
  { path: 'about', component:AboutComponent, title:'About' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
