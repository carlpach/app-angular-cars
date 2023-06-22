import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { NewCarComponent } from './pages/new-car/new-car.component';
import { EditCarComponent } from "./pages/edit-car/edit-car.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'car-list', component: CarListComponent},
  {path: 'car-list/:id', component: CarDetailComponent},
  {path: 'add', component: NewCarComponent},
  {path: 'edit', component: EditCarComponent},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
