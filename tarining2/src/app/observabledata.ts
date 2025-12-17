import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Observabledata {
  
  private apiurl = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient){}

  getdata():Observable<any>{
    return this.http.get(this.apiurl);
  }
}
