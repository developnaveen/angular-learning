import { Component, Directive } from '@angular/core';
import { Propertybinding } from './propertybinding/propertybinding';
import { Eventbinding } from './eventbinding/eventbinding';
import { Refrencevariable } from './refrencevariable/refrencevariable';
import { Directivecom } from './directive/directive';
import { Pipeswork } from './pipeswork/pipeswork';
import { MypipePipe } from './mypipe-pipe';
import { Highlight } from './highlight';
import { Formscomponent } from './formscomponent/formscomponent';
import { Reactiveform } from './reactiveform/reactiveform';
import { Fetchdata } from './fetchdata';
import { RouterLink, RouterOutlet } from '@angular/router'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  // imports: [Propertybinding ]
  // imports:[Eventbinding]
  // imports:[Refrencevariable]
  // imports: [Directivecom]
  // imports: [Pipeswork]
  // imports: [MypipePipe]
  // imports: [Highlight]
  // imports:[Formscomponent]
  // imports: [Reactiveform]
  // imports: [RouterOutlet, RouterLink]

})
export class App {
 // message:any;

  /* constructor(private fd:Fetchdata){
    console.log(fd.getMessage());
  }

  load() {
    this.fd.getMessage().subscribe({
      next: (res) => {
        console.log("data", res);
        this.message = res;
      },
      error:(err) => console.error("error", err),
      complete:() => console.log("request")
    });
  } */

  
}
