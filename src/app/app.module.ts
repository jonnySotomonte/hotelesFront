import './extensions/rxjs-extensions'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {HotelesService} from './service/hoteles.service';
import { HotelBoxComponent } from './components/hotel-box/hotel-box.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelBoxComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HotelesService
  ],
  bootstrap: [AppComponent],
  exports: [HotelBoxComponent, AmenitiesComponent]
})
export class AppModule { }
