import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { NewCarComponent } from './pages/new-car/new-car.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { ApiCarsService } from "../services/cars.service";

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditCarComponent } from './pages/edit-car/edit-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NewCarComponent,
    CarDetailComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ApiCarsService],  // Aquí proveemos nuestro servicio al módulo
  bootstrap: [AppComponent]
})
export class AppModule { }
