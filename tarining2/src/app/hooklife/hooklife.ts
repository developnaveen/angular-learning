import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component,input,OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: 'app-hooklife',
  standalone: true,
  templateUrl: './hooklife.html',
  styleUrl: './hooklife.css',
  imports:[CommonModule]
})

export class Hooklife implements OnInit //, OnDestroy 
{
  counter = 0;
  timer: any;
  constructor(private cdr:ChangeDetectorRef ){}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.counter++;
      this.cdr.detectChanges();
      console.log(this.counter);
    }, 1000);
  }

  ngAfterViewChecked() {
  this.cdr.detectChanges(); 
}

  ngOnDestroy() {
    console.log("component destroyed");
    clearInterval(this.timer);
  }
}
