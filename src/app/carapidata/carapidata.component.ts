import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carapidata } from '../carapidata';
import { CarapidataService } from '../carapidata.service';

@Component({
  selector: 'app-carapidata',
  templateUrl: './carapidata.component.html',
  styleUrls: ['./carapidata.component.css'],
})
export class CarapidataComponent implements OnInit {
  public vehicles: Carapidata[] = [];
  public filterTerm: string = '';
  public column: string = '';
  public order: string = '';

  constructor(private _carapidataService: CarapidataService, private router: Router) {
    this._carapidataService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  ngOnInit(): void {}

  filter() {
    this._carapidataService.getFilterdVehicles(this.filterTerm).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  sort() {
    this._carapidataService.getSortedVehicles(this.column,this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  page(pageNo: number) {
    this._carapidataService.getPageVehicles(pageNo).subscribe(
      (data: any) => {
        this.vehicles = data;
      },

      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  delete(id: string) {
    this._carapidataService.deleteVehicles(id).subscribe((data: any) => {
      alert('Deleted successfully!!!!');
      location.reload();
    });
  }
  view(id:string){
    this.router.navigateByUrl('/dashboard/vahicle-details'+'/'+id);
  }
}
