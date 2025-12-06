import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  imports: [],
  templateUrl: './eventbinding.html',
  styleUrl: './eventbinding.css',
})
export class Eventbinding {
  count = 0;
  countincrease(){
    this.count++;
  }
}
