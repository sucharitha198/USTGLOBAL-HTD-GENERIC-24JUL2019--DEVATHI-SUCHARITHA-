import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    UsersComponent,
    HeaderComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent},
      {path: 'about' , component: AboutComponent},
      {path: 'register' , component: RegisterComponent},
      {path: 'users' , component: UsersComponent},
      {path: '**' , component: PagenotfoundComponent }
    ]), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
