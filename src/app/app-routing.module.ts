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
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', redirectTo:'app', pathMatch:'full', title:'Home'},
  { path:'navbar', component:NavbarComponent, },
  { path: '', component:BodyComponent },
  { path: 'body', component:BodyComponent, title:'Home'},
  { path:'footer', component:FooterComponent },
  { path: 'books', component:BooksComponent, title:'Books', canActivate:[authGuard] },
  { path: 'library', component:LibraryComponent, title:'favorites', canActivate:[authGuard] },
  { path: 'signin', component:SigninComponent, title:'SignIn'},
  { path: 'signup', component:SignupComponent, title:'SignUp'},
  { path: 'about', component:AboutComponent, title:'About' },
  { path: 'contact', component:ContactComponent, title:'Contact' },
  { path: 'dashboard', component:DashboardComponent, title:'Profile', canActivate:[authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
