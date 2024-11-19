import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-texto-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './texto-component.component.html',
  styleUrl: './texto-component.component.css'
})
export class TextoComponentComponent {
  text = '';
  
  @Output() onTextChange = new EventEmitter<string>();

  onInputChange() {
    this.onTextChange.emit(this.text);
  }
  clearText() {
    this.text = ''; // Limpia el input
    this.onTextChange.emit(this.text); // Notifica al componente padre
  }
}
