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
  imports: [Reactiveform]
})
export class App {

}
