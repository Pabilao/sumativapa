import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn3-component',
  standalone: true,
  imports: [],
  templateUrl: './btn3-component.component.html',
  styleUrl: './btn3-component.component.css'
})
export class Btn3ComponentComponent {
  @Output() onChangeColor = new EventEmitter<void>();

    emitChangeColor() {
        // Emitir evento para cambiar el color
        this.onChangeColor.emit();
    }
}
