import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componentbinding',
  imports: [],
  templateUrl: './componentbinding.html',
  styleUrl: './componentbinding.css',
})
export class Componentbinding {
  @Input() message: String ='';
  @Output() notify = new EventEmitter<string>();

  sendData(){
    this.notify.emit('Message from child component');
  }
}
