import { Component, OnInit } from '@angular/core';
import { TypeCarsI } from "../../../models/cars.model";
import { ApiCarsService } from "../../../services/cars.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  // creamos nuestro objeto de formulario llamado newCarForm
  public newCarForm!: FormGroup;
  public car!: TypeCarsI;
  public submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private apiCarsServ: ApiCarsService, private router: Router) {}


  ngOnInit(): void {
    this.newCarForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      year: ["", [Validators.required, Validators.maxLength(4)]],
      color: ["", [Validators.required, Validators.maxLength(14)]],
      price: [""],
      availability: [false]
    })


  
    // listen to changes of form and modifiy variable car
    this.newCarForm.valueChanges.subscribe((data => {
      this.car = data;
    }))
    }



    newCarSubmit(): void {
      // when form is passed by the user change the variable
      console.log(this.newCarForm.valid);
      this.submitted = true;
      
      // Check if form is valid
      if (this.newCarForm.valid) {

        this.apiCarsServ.postCar(this.car).subscribe((data) => {
            console.log(data);
            // after getting all the fields I reset the form so it's empty again
            this.newCarForm.reset();
            this.submitted = false;
            this.router.navigate(["/"]);
            console.log("end");
          })
      }
    }

}
