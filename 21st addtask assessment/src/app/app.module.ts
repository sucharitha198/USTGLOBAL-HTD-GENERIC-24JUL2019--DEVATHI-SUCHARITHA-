import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewAllTaskComponent } from './view-all-task/view-all-task.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    ViewAllTaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'add_task', component: AddTaskComponent},
      {path: 'view_all_task', component: ViewAllTaskComponent}
    ]), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
