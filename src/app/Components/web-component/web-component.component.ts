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
    fontSize = 16; // Tamaño de fuente inicial

    updatePassword(password: string) { this.password = password; }
    updateEmail(email: string) { this.email = email; }
    updateText(text: string) { this.text = text; }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }

    // Maneja el evento de aumentar el tamaño de fuente
    handleIncreaseFontSize() {
        if (this.fontSize < 30) { // Límite máximo
            this.fontSize += 2; // Aumenta el tamaño de la letra
        }
    }

    // Maneja el evento de disminuir el tamaño de fuente
    handleDecreaseFontSize() {
        if (this.fontSize > 10) { // Límite mínimo
            this.fontSize -= 2; // Disminuye el tamaño de la letra
        }
    }

    // Maneja el evento de cambiar el color de fondo
    handleChangeColor() {
      const viewer = document.querySelector('.viewer') as HTMLElement; // Asegúrate de que sea un HTMLElement
      if (viewer) {
          viewer.style.backgroundColor = viewer.style.backgroundColor === 'lightgray' ? 'white' : 'lightgray';
      }
  }

    // Maneja el evento de limpiar los inputs
    handleClearInputs() {
        this.password = '';
        this.email = '';
        this.text = '';
    }
}
