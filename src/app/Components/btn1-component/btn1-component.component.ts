import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn1-component',
  standalone: true,
  imports: [],
  templateUrl: './btn1-component.component.html',
  styleUrl: './btn1-component.component.css'
})
export class Btn1ComponentComponent {
  @Output() onPrimaryClick = new EventEmitter<void>();

  emitPrimary() { this.onPrimaryClick.emit(); }
}
