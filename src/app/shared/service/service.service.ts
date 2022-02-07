import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = 'http://localhost:3000/usuario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

     getUser(): Observable<any>{
       return this.httpClient.get(this.apiUrl,  {responseType: 'json'})
     }
}
