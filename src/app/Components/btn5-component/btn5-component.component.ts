import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn5-component',
  standalone: true,
  imports: [],
  templateUrl: './btn5-component.component.html',
  styleUrl: './btn5-component.component.css'
})
export class Btn5ComponentComponent {
  @Output() onToggleDarkMode = new EventEmitter<void>();

    emitToggleDarkMode() {
        // Emitir evento para cambiar el modo oscuro
        this.onToggleDarkMode.emit();
    }
}
