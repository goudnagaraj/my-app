import { Component, OnInit } from '@angular/core';
import { Itemscart } from '../itemscart';
import { ItemscartService } from '../itemscart.service';

@Component({
  selector: 'app-itemscart',
  templateUrl: './itemscart.component.html',
  styleUrls: ['./itemscart.component.css']
})
export class ItemscartComponent implements OnInit {

  public items: Itemscart [] = [];

  constructor(private _itemscartService: ItemscartService ) {

    this._itemscartService.getItemscart().subscribe(

      (data: any)=>{
        this.items=data;
      },

      (err: any)=>{
        alert('Internal server error');
      }
    )
   }

  ngOnInit(): void {
  }

}
