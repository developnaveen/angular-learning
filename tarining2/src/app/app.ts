import { Component, signal } from '@angular/core';
import { Hooklife } from './hooklife/hooklife';
import { Componentbinding } from './componentbinding/componentbinding';
import { Observabledata } from './observabledata'; 

@Component({
  selector: 'app-root',
  // imports: [Hooklife],
  // imports: [Componentbinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /* parent ="hello from parent";
  childresponse = "";

  handlechild(data: string) {
    this.childresponse = data;
  }
    */

  data:any =null;
  constructor(private fetch:Observabledata){}

  loadTodo() {
    this.fetch.getdata().subscribe({
      next: (res:any) => {
        console.log("API Response:", res);
        this.data = res;
        console.log(this.data);
      },
      error: (err:any) => console.error("Error:", err)
    });
}
}
