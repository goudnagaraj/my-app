import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Userapi } from '../userapi';
import { UserapiService } from '../userapi.service';

@Component({
  selector: 'app-userapi',
  templateUrl: './userapi.component.html',
  styleUrls: ['./userapi.component.css']
})
export class UserapiComponent implements OnInit {

  public users: Userapi [] =[];

  constructor(private _userapiService : UserapiService) {
     this._userapiService.getUsers().subscribe(
      (data : any)=>{
        this.users = data;
      },
      (err: any)=>{
        alert('Internal server error')
      }
    )
   }

  ngOnInit(): void {
  }

}
