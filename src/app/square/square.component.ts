import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  public number1:number=0;
  public result:number=0;

  constructor() { }
  area(){
    this.result=this.number1+this.number1
  }

  parameter(){
    this.result=this.number1*4
  }

  ngOnInit(): void {
  }

}
