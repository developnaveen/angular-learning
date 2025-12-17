import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Fetchdata {

  private datalink = "https://jsonplaceholder.typicode.com/todos/1";

  constructor(private http:HttpClient){}

  getMessage():Observable<any>{
    console.log("success");
    return this.http.get(this.datalink);
  }
}
