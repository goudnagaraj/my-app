import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itemscart } from './itemscart';

@Injectable({
  providedIn: 'root'
})
export class ItemscartService {

  constructor(private _httpClient: HttpClient) { }

  getItemscart(): Observable<Itemscart[]>{
    return this._httpClient.get<Itemscart[]>('https://fakestoreapi.com/products')
  }
}
