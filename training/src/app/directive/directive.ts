import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgIf,NgFor],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directivecom {
  isValid: boolean = false;
  fruits: string[] =["Apple","Banana","Mango","Orange"];
}
