import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contra-component',
  standalone: true,
  imports: [],
  templateUrl: './contra-component.component.html',
  styleUrl: './contra-component.component.css'
})
export class ContraComponentComponent {
  password = '';
  
  @Output() onPasswordChange = new EventEmitter<string>();

  onInputChange() {
    this.onPasswordChange.emit(this.password);
  }
}
