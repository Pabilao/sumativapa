import { Component,ViewChild } from '@angular/core';
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
    fontSize = 22; // Tamaño inicial de la fuente
    text = '';
    email = '';
    password = '';
  
    // Métodos para manejar los eventos
    handleIncreaseFontSize() {
      this.fontSize += 2; // Incrementa el tamaño de fuente
    }
  
    handleDecreaseFontSize() {
      if (this.fontSize > 8) this.fontSize -= 2; // Reduce el tamaño de fuente mínimo a 8px
    }
  
    updateText(newText: string) {
      this.text = newText; // Actualiza el texto
    }
  
    updateEmail(newEmail: string) {
      this.email = newEmail; // Actualiza el email
    }
  
    updatePassword(newPassword: string) {
      this.password = newPassword; // Actualiza la contraseña
    }
  
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // Cambia el estado del modo oscuro
      document.body.classList.toggle('dark-mode', this.isDarkMode); // Alterna la clase 'dark-mode'
    }
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:3098691472.
    isDarkMode = false;

    // Propiedad para almacenar el color actual del recuadro
    boxColor = 'white'; // Color inicial del recuadro

    // Lista de colores para alternar
    colors = ['white', 'lightblue', 'lightgreen', 'lightcoral', 'lightyellow'];
    currentColorIndex = 0;

    handleChangeColor() {
    // Cambiar al siguiente color de la lista
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.boxColor = this.colors[this.currentColorIndex];
  }
    @ViewChild(EmailComponentComponent) emailComponent!: EmailComponentComponent;
    @ViewChild(TextoComponentComponent) textoComponent!: TextoComponentComponent;
    @ViewChild(ContraComponentComponent) contraComponent!: ContraComponentComponent;
    handleClearInputs() {
      this.text = '';
      this.email = '';
      this.password = '';
      this.emailComponent.clearEmail();
      this.textoComponent.clearText();
      this.contraComponent.clearPassword();
    }
}
