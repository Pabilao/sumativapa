import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn2-component',
  standalone: true,
  imports: [],
  templateUrl: './btn2-component.component.html',
  styleUrl: './btn2-component.component.css'
})
export class Btn2ComponentComponent {
  @Output() onDecreaseFontSize = new EventEmitter<void>();

    emitDecreaseFontSize() {
        // Emitir evento para disminuir el tamaño de fuente
        this.onDecreaseFontSize.emit();
    }
}
