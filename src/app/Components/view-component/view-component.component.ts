import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-component.component.html',
  styleUrl: './view-component.component.css'
})
export class ViewComponentComponent {
  @Input() password: string = '';
  @Input() email: string = '';
  @Input() text: string = '';
  @Input() boxColor: string = 'white';
}
