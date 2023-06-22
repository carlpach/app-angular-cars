import { Component, OnInit } from '@angular/core';
import { TypeCarsI } from "../../../models/cars.model";
import { ApiCarsService } from "../../../services/cars.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent {

    // creamos nuestro objeto de formulario llamado newCarForm
    public newCarForm!: FormGroup;
    public car!: TypeCarsI;
    public carId!: number;
    public submitted: boolean = false;

    constructor(private formBuilder: FormBuilder, private apiCarsServ: ApiCarsService, private router: Router) {
      // get comic and id from service to use it in PUT method below
      this.car = this.apiCarsServ.getMyCarSelected();
      this.carId = this.apiCarsServ.getMyId();
      console.log("car ------->", this.car);
      console.log("cardId ------->", this.carId);
      
    }

    ngOnInit(): void {
      this.newCarForm = this.formBuilder.group({
        name: ["", [Validators.required]],
        year: ["", [Validators.required, Validators.maxLength(4)]],
        color: ["", [Validators.required, Validators.maxLength(14)]],
        image: [""],
        price: [""]
      })

      // listen to changes of form and modifiy variable car
      this.newCarForm.valueChanges.subscribe((data => {
        this.car = data;
      }))

    }

    editCarSubmit(): void {
      this.submitted = true;

      if (this.newCarForm.valid) {
        this.apiCarsServ.putCar(this.carId, this.car).subscribe((data) => {
          console.log(data);
          this.newCarForm.reset();
          this.submitted = false;

          
        })
      }

    }
}
