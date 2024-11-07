import { Component } from '@angular/core';

interface EmergencyContact {
  name: string;
  phone: string;
  type: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage {
  searchTerm: string = '';
  contacts: EmergencyContact[] = [
    { name: 'Seguridad DUOC', phone: '1111111111', type: 'Seguridad' },
    { name: 'Ambulancia', phone: '131', type: 'Médico' },
    { name: 'Bomberos', phone: '132', type: 'Emergencia' },
    { name: 'Carabineros', phone: '133', type: 'Policía' },
    { name: 'PDI', phone: '134', type: 'Policía' },
  ];
  
  filteredContacts: EmergencyContact[] = [];

  constructor() {
    this.filteredContacts = [...this.contacts];
  }

  filterContacts(event: any) {
    const searchValue = event.detail.value?.toLowerCase() || '';
    
    if (!searchValue.trim()) {
      this.filteredContacts = [...this.contacts];
      return;
    }

    this.filteredContacts = this.contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchValue) ||
      contact.phone.includes(searchValue)
    );
  }

  callNumber(phone: string) {
    window.open(`tel:${phone.replace(/[^0-9]/g, '')}`);
  }
}
