import { Component, NgModule } from '@angular/core';
import { Btn1ComponentComponent } from '../btn1-component/btn1-component.component';
import { Btn2ComponentComponent } from '../btn2-component/btn2-component.component';
import { Btn3ComponentComponent } from '../btn3-component/btn3-component.component';
import { Btn4ComponentComponent } from '../btn4-component/btn4-component.component';
import { Btn5ComponentComponent } from '../btn5-component/btn5-component.component';
import { ContraComponentComponent } from '../contra-component/contra-component.component';
import { EmailComponentComponent } from '../email-component/email-component.component';
import { TextoComponentComponent } from '../texto-component/texto-component.component';
import { ViewComponentComponent } from '../view-component/view-component.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-web-component',
  standalone: true,
  imports: [NgClass, Btn1ComponentComponent, Btn2ComponentComponent, Btn3ComponentComponent, Btn4ComponentComponent, Btn5ComponentComponent, ContraComponentComponent, EmailComponentComponent, TextoComponentComponent, ViewComponentComponent],
  templateUrl: './web-component.component.html',
  styleUrl: './web-component.component.css'
})
export class WebComponentComponent {
  password = '';
  email = '';
  text = '';
  darkMode = false;

  updatePassword(password: string) { this.password = password; }
  updateEmail(email: string) { this.email = email; }
  updateText(text: string) { this.text = text; }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
