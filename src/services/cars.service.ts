import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myCarss } from "../data/cars";
import { TypeCarsI } from "../models/cars.model";

@Injectable({
  providedIn: 'root'
})
export class ApiCarsService {

  constructor(private http: HttpClient) { }

  getCarList() {
    return this.http.get('https://myfakeapi.com/api/cars/')
  }

  getCarById(id: string) {
    return this.http.get(`https://myfakeapi.com/api/cars/${id}`)
    
  }
}
