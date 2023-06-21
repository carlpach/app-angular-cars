import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit{
  carId!: string;
  car!: any;

  constructor(private api: ApiCarsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(params => {
        this.carId = params.get('id') || "1";
      })

      this.api.getCarById(this.carId).subscribe((data: any) => {
        console.log(data);
        this.car = data;
      })
  }

}
