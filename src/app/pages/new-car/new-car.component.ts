import { Component } from '@angular/core';
import { TypeCarsI } from "../../../models/cars.model";
import { ApiCarsService } from "../../../services/cars.service";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent {

  constructor(private carsService: ApiCarsService ) {}

  sendCar(newCar: TypeCarsI) {
    
  }
}
