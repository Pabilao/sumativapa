import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email-component.component.html',
  styleUrl: './email-component.component.css'
})
export class EmailComponentComponent {
  email = '';

  

  @Output() onEmailChange = new EventEmitter<string>();
  
  onInputChange() {
    this.onEmailChange.emit(this.email);
  }

  // Método para limpiar el email
  clearEmail() {
    this.email = ''; // Limpia el input
    this.onEmailChange.emit(this.email); // Notifica al componente padre
  }
}
