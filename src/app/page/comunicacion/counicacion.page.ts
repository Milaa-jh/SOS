import { Component } from '@angular/core';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-counicacion',
  templateUrl: './counicacion.page.html',
  styleUrls: ['./counicacion.page.scss'],
})
export class CounicacionPage {
  messages: Message[] = [
    {
      text: 'Bienvenido al chat de emergencia',
      isUser: false,
      timestamp: new Date()
    }
  ];
  newMessage: string = '';

  constructor() { }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        isUser: true,
        timestamp: new Date()
      });
      this.newMessage = '';
      
      // Simular respuesta automática
      setTimeout(() => {
        this.messages.push({
          text: 'Un agente de seguridad atenderá tu mensaje pronto.',
          isUser: false,
          timestamp: new Date()
        });
      }, 1000);
    }
  }
}