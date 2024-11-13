import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-component',
  standalone: true,
  imports: [],
  templateUrl: './email-component.component.html',
  styleUrl: './email-component.component.css'
})
export class EmailComponentComponent {
  email = '';
  
  @Output() onEmailChange = new EventEmitter<string>();

  onInputChange() {
    this.onEmailChange.emit(this.email);
  }
}
