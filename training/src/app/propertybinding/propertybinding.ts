import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.html',
  standalone: true,
  styleUrl: './propertybinding.css',
  imports: [NgClass, NgStyle],
})
export class Propertybinding {
  name: string = "naveen";
  image = "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png";
  isDisabled = false;
  isSubscribed = false;
  message = "Welcome to the home page";
  userName = "naveen";
  isActive = false;
  status = 'error';  
  boxColor = 'orange';
  boxSize = 120;
}
