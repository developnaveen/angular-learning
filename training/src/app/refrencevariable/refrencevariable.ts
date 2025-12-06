import { Component } from '@angular/core';

@Component({
  selector: 'app-refrencevariable',
  imports: [],
  templateUrl: './refrencevariable.html',
  styleUrl: './refrencevariable.css',
})
export class Refrencevariable {
  show(value:string){
    console.log(value);
  }

  count = 0;
  increase(){
    this.count++;
  }
}
