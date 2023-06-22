import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCarsService } from '../../../services/cars.service';
import { TypeCarsI } from "../../../models/cars.model";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit{
  carId!: number;
  car!: TypeCarsI;

  constructor(private apiCarsServ: ApiCarsService, private activatedRoute: ActivatedRoute, private router: Router) {}



  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
        this.carId = Number(params.get('id'));
      })
      
      console.log(this.car);
      console.log(this.carId);
      
      this.apiCarsServ.getCarById(this.carId).subscribe((data: any) => {
        console.log("get car by id --------->");
        console.log(data.name);
        this.car = data[0];
        console.log(this.car);
      })
  }

  // when click on "Edit" SET the comic and id data in the service
  public editCar() {
    this.apiCarsServ.setComic(this.car, this.carId);
    this.router.navigate(["edit"]);
  }

  public deleteCar() {
    console.log("borrado");
    this.apiCarsServ.deleteCar(this.carId).subscribe((data) => {
      console.log("Comic borrado");
      this.router.navigate(["/"]);
    })
  }


}
