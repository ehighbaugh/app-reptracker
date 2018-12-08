import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MyAnimalsComponent } from './my-animals/my-animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MyAnimalsComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
