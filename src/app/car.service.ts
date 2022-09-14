import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public message: string = 'Electric Car is going to Launch in 2024';

  constructor() { }
}
