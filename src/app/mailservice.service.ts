import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mailservice } from './mailservice';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {

  constructor(private _httpClient: HttpClient) { }

  getMailservice(): Observable<Mailservice[]>{
    return this._httpClient.get<Mailservice[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
