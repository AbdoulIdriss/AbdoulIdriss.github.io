import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BooksComponent } from './books/books.component';
import { LibraryComponent } from './library/library.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path:'', redirectTo:'app', pathMatch:'full'},
  { path:'navbar', component:NavbarComponent },
  { path: '', component:BodyComponent },
  { path:'footer', component:FooterComponent },
  { path: 'books', component:BooksComponent },
  { path: 'library', component:LibraryComponent },
  { path: 'signin', component:SigninComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'about', component:AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
