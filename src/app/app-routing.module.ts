import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path:'', redirectTo:'app', pathMatch:'full'},
  { path:'navbar', component:NavbarComponent },
  { path: 'body', component:BodyComponent },
  { path:'footer', component:FooterComponent },
  { path: 'books', component:BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
