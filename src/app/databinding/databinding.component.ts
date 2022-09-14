import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  public age: number= 26;
  public name: string = "Nagaraj Goud";
  public isIndian: boolean = true;

  public phones: number[] = [9642339520,7989085619,9908600650];

  public courses: string[] = ['Angular','React','Java'];

  public user = {name:'John', city:'Texas'};
  public student: Student = {
    name: 'Raju',
    id: 'ATLIT1712',
    marks:98
  };

  public users: User[] =
  [
    {name:'John', city:'Texas'},
    {name:'Smith', city:'Vegas'},
    {name: 'Raj', city:'Banglor'},
    {name: 'Ram', city:'Hyd'}
  ]

  public students: Student[] = [
    {name:'Nagaraj Goud',id:'S0001', marks:94},
    {name:'Jayavardhan',id:'S0002',marks: 95},
    {name:'Rakesh',id:'S0003',marks:93},
    {name:'Sreenu',id:'S0004',marks:90}
  ]



  public employee: Employee = {
    name: 'Nagaraj Goud',
    company: 'Google',
    id:'GGl1712',
    package:3000000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
