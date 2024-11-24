import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contra-component',
  standalone: true,
  imports: [FormsModule, NgIf], 
  templateUrl: './contra-component.component.html',
  styleUrl: './contra-component.component.css'
})
export class ContraComponentComponent {
  password = ''; 
  passwordError = '';
  @Output() onPasswordChange = new EventEmitter<string>();

  onInputChange() {
    this.onPasswordChange.emit(this.password);
    this.validatePassword();
  }
  validatePassword() {
    const hasUpperCase = /[A-Z]/.test(this.password);
    this.passwordError = this.password.length >= 8 && hasUpperCase ? '' : 'La contraseña debe tener al menos 8 caracteres y una mayúscula.';
  }
  clearPassword() {
    this.password = ''; // Limpia el input
    this.onPasswordChange.emit(this.password); // Notifica al componente padre
  }
}
