import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-email-component',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './email-component.component.html',
  styleUrl: './email-component.component.css'
})
export class EmailComponentComponent {
  email = '';
  emailError = '';
  

  @Output() onEmailChange = new EventEmitter<string>();
  
  onInputChange() {
    this.onEmailChange.emit(this.email);
    this.validateEmail();
  }
  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = emailPattern.test(this.email) ? '' : 'El correo electrónico no es válido.';
  }
  // Método para limpiar el email
  clearEmail() {
    this.email = ''; // Limpia el input
    this.onEmailChange.emit(this.email); // Notifica al componente padre
  }
}
