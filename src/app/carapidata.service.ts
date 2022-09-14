import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carapidata } from './carapidata';

@Injectable({
  providedIn: 'root',
})
export class CarapidataService {
  constructor(private _httpClient: HttpClient) {}

  getVehicles(): Observable<Carapidata[]> {
    return this._httpClient.get<Carapidata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'
    );
  }

  getFilterdVehicles(filterTerm: string): Observable<Carapidata[]> {
    return this._httpClient.get<Carapidata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterTerm
    );
  }

  getPageVehicles(pageNo: number): Observable<Carapidata[]> {
    return this._httpClient.get<Carapidata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageNo
    );
  }

  getSortedVehicles(column: string, order: string): Observable<Carapidata[]> {
    return this._httpClient.get<Carapidata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +'?sortBy='+column+'&order=' + order
    );
  }

  createvehicle(vehicle: Carapidata ): Observable<Carapidata>{
    return this._httpClient.post<Carapidata>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction', vehicle
    );
  }

  deleteVehicles(id: string): Observable<Carapidata> {
    return this._httpClient.delete<Carapidata>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }
}

