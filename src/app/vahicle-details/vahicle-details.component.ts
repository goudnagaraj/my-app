import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carapidata } from '../carapidata';
import { CarapidataService } from '../carapidata.service';

@Component({
  selector: 'app-vahicle-details',
  templateUrl: './vahicle-details.component.html',
  styleUrls: ['./vahicle-details.component.css']
})
export class VahicleDetailsComponent implements OnInit {

  public vehicle: Carapidata = <Carapidata>{};

  constructor(private _carapidataService: CarapidataService , private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.getVehicle(data.id);
      }
    )
   }

  ngOnInit(): void {
  }

  getVehicle(id:string){
    this._carapidataService.getVehicle(id).subscribe(
      (data:any)=>{
        this.vehicle = data;
      }
    )
  }

}
