import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeCarsI } from "../models/cars.model";

@Injectable({
  providedIn: 'root'
})
export class ApiCarsService {

  // added id and car in service to extract it when editing car (PUT)
  id!: number;
  car!: TypeCarsI;
  base_url: string = "http://localhost:3000/cars"

  constructor(private http: HttpClient) { }

  getCarList() {
    return this.http.get(this.base_url)
  }

  getCarById(id: number) {
    return this.http.get(`${this.base_url}?id=${id}`)
    
  }

  postCar(newCar: TypeCarsI) {
       return this.http.post(this.base_url, newCar)
  }

  putCar(id: number, editedCar: TypeCarsI) {
    console.log("edited car ---------");
    console.log(id);
    console.log(editedCar);
    return this.http.put(`${this.base_url}/${id}`, editedCar)
  }

  deleteCar(id: number) {
    return this.http.delete(`${this.base_url}/${id}`)
  }

  // used for PUT
  setComic(car: TypeCarsI, id: number) {
    this.car = car;
    this.id = id;
  }

  // used for PUT
  getMyCarSelected() {
    return this.car;
  }

  // used for PUT
  getMyId() {
    return this.id;
  }
}
