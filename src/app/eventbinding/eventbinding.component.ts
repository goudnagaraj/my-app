import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    alert("submit clicked");
  }

  test(){
    alert("keyup");
  }

  test2(){
    alert("keydown");
  }

  test3(){
    alert("keypress");
  }

  test4(){
    alert("Mouse Enter");
  }

  test5(){
    alert("Mouse Leave");
  }

}
