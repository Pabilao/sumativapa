import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn4-component',
  standalone: true,
  imports: [],
  templateUrl: './btn4-component.component.html',
  styleUrl: './btn4-component.component.css'
})
export class Btn4ComponentComponent {
  @Output() onClearInputs = new EventEmitter<void>();

    emitClearInputs() {
        // Emitir evento para limpiar los inputs
        this.onClearInputs.emit();
    }
}
