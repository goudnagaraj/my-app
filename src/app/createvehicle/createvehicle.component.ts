import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarapidataService } from '../carapidata.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {
  
  public VehicleForm: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      id: new FormControl()
    }
  )
  constructor(private _carapidataServices:CarapidataService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.VehicleForm.value);
  this._carapidataServices.createvehicle(this.VehicleForm.value ).subscribe(
    (data:any)=>{
      alert('created succesfully !!!');
    },
    (err:any)=>{
      alert('Internal server error');
    }
  )
  
  }

}
