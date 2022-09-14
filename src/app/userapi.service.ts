import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userapi } from './userapi';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private _httpClient: HttpClient) { }

  getUsers():Observable<Userapi[]>{

    return this._httpClient.get<Userapi[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
