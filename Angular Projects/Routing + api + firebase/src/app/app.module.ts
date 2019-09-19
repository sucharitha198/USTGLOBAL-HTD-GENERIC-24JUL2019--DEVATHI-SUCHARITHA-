import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';
import { JsonComponent } from './json/json.component';
import { GithubComponent } from './github/github.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ApiComponent } from './api/api.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewsComponent,
    BusinessComponent,
    SportsComponent,
    EntertainmentComponent,
    ScienceComponent,
    HealthComponent,
    TechnologyComponent,
    JsonComponent,
    GithubComponent,
    CarsComponent,
    CarDetailsComponent,
    ApiComponent,
    AddProductComponent,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'news', component: NewsComponent},
      { path: 'technology', component: TechnologyComponent},
      { path: 'business', component: BusinessComponent},
      { path: 'sports', component: SportsComponent},
      { path: 'science', component: ScienceComponent},
      { path: 'health', component: HealthComponent},
      { path: 'entertainment', component: EntertainmentComponent},
      { path: 'json', component: JsonComponent},
      { path: 'github', component: GithubComponent},
      { path: 'cars', component: CarsComponent},
      { path: 'car-details', component: CarDetailsComponent},
      { path: 'addProduct', component: AddProductComponent},
      { path: 'productdetails', component: ProductdetailsComponent},
  ]), HttpClientModule,
  FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
