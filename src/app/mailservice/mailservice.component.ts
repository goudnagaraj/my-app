import { Component, OnInit } from '@angular/core';
import { Mailservice } from '../mailservice';
import { MailserviceService } from '../mailservice.service';

@Component({
  selector: 'app-mailservice',
  templateUrl: './mailservice.component.html',
  styleUrls: ['./mailservice.component.css']
})
export class MailserviceComponent implements OnInit {

  public mails: Mailservice [] = [];

  constructor(private _mailserviceService: MailserviceService) {

    this._mailserviceService.getMailservice().subscribe(

    (data: any)=>{
      this.mails=data;
    },
    (err: any)=>{
      alert('Internal server error');
    }
    )
   }

  ngOnInit(): void {
  }

}
