import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebComponentComponent } from './Components/web-component/web-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
