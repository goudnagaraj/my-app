import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

  public name:string = '';
  public price: number = 0;
  public quantity: number =0;

  public totalAmount: number = 0;


  public Items:Item[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.Items.push(
      {
        'name': this.name,
        'price': this.price,
        'quantity': this.quantity
      } 
    );
    this.total();
  }

  total(){
    this.totalAmount =0;
    for(let Item of this.Items){
      this.totalAmount = this.totalAmount + (Item.price*Item.quantity);
    }
  }

  delete(i:number){
    this.Items.splice(i,1);
  }

  clear(){
    this.Items=[];
  }
  
  pricelowtohigh(){
    this.Items=this.Items.sort((a,b) => a.price - b.price);
  }

  pricehightolow(){
    this.Items=this.Items.sort((a,b) => b.price - a.price);
  }
}
