import { Component, OnInit } from '@angular/core';
import { Bankaccount } from '../bankaccount';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent implements OnInit {

  public accounts: Bankaccount [] = [];

  constructor(private _bankaccountService: BankaccountService) {

    this._bankaccountService.getBankaccount().subscribe(

      (data:any)=>{
        this.accounts = data;
      },

      (err:any)=>{
        alert('Internal server error');
      }
    )
   }

  ngOnInit(): void {
  }

}
