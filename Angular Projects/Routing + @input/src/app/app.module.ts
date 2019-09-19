import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { NewsComponent } from './news/news.component';
import { CarsComponent } from './cars/cars.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RecipieDetailsComponent } from './recipie-details/recipie-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    NewsComponent,
    CarsComponent,
    MobilesComponent,
    CarDetailsComponent,
    RecipieDetailsComponent,
    NewsDetailsComponent,
    MobileDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path :'', component : HomeComponent},
      // {path :'header',component : HeaderComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'news', component:NewsComponent },
      {path: 'recipies', component:RecipiesComponent },
      {path: 'mobiles', component:MobilesComponent },
      {path:'**',component: PageNotFoundComponent}
      ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
