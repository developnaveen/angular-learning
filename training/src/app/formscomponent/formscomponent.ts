import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formscomponent',
  imports: [NgIf,FormsModule],
  templateUrl: './formscomponent.html',
  styleUrl: './formscomponent.css',
})
export class Formscomponent {
  user = { name: '', email: '' };
  submitted = false;

  onSubmit(userForm: any) {
    this.submitted = true;
    this.user.name = userForm.value.name;
    console.log(this.user.name);
  }

}
