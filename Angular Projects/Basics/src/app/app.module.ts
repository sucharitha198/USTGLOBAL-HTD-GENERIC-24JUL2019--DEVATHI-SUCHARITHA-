import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { Samplecomponent } from './sample.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfSwitchComponent } from './if-switch/if-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { DirectiveMyDirective } from './directive-my.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { PareComponent } from './pare/pare.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    AppComponent,
    // Samplecomponent,
    HeaderComponent,
    DataBindingComponent,
    TwoWayComponent,
    DirectivesComponent,
    IfSwitchComponent,
    AttributeDirectivesComponent,
    MyDirectiveComponent,
    DirectiveMyDirective,
    ParentComponent,
    ChildComponent,
    ChildrenComponent,
    PareComponent,
    BikesComponent,
    BikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
