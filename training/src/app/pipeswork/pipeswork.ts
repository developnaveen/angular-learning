import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeswork',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe,CurrencyPipe,DecimalPipe,PercentPipe],
  templateUrl: './pipeswork.html',
  styleUrl: './pipeswork.css',
})
export class Pipeswork {
  today:number = Date.now();
  name:string = "NAVeen";
  amount:number = 500;
  animal:string | null = null;
}
