import { Component, OnInit } from '@angular/core';
import { Employeesdetails } from '../employeesdtails';

@Component({
  selector: 'app-employeesdtails',
  templateUrl: './employeesdtails.component.html',
  styleUrls: ['./employeesdtails.component.css']
})
export class EmployeesdtailsComponent implements OnInit {
  public name:string='';
  public age:number=0;
  public company:string='';
  public package:number=0;

  public employees:Employeesdetails[] =[];



  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.employees.push(
      {
    'name': this.name,
    'age': this.age,
    'company': this.company,
    'package' : this.package
    }
    );
  }
  packagelowtohigh(){
   this.employees.sort((a,b) => a.package - b.package);
  }

  packagehightolow(){
    this.employees.sort((a,b) => b.package - a.package);
  }

  remove(i:number){
    this.employees.splice(i,1);

  }
  delete(){
    this.employees=[];
  }

}
