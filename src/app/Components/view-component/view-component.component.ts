import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-component',
  standalone: true,
  imports: [],
  templateUrl: './view-component.component.html',
  styleUrl: './view-component.component.css'
})
export class ViewComponentComponent {
  @Input() password: string = '';
  @Input() email: string = '';
  @Input() text: string = '';
  animate = false;

  triggerAnimation() {
    this.animate = true;
    setTimeout(() => this.animate = false, 500);
  }
}
