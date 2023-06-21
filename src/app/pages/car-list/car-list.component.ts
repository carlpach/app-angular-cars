import { ApiCarsService } from '../../../services/cars.service';
import { Component, OnInit  } from '@angular/core';
import { TypeCarsI } from "../../../models/cars.model";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})

export class CarListComponent implements OnInit {
  carList!: any[];

  constructor(private api: ApiCarsService) {

  }

  // cuando se carga el componente
  ngOnInit(): void {
    this.api.getCarList().subscribe((data: any) => {
      console.log("data get ------>");
      console.log(data);
      
      this.carList = [...data.cars];
    })
  }


}
