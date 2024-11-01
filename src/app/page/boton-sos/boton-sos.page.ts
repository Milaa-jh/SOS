import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-boton-sos',
  templateUrl: './boton-sos.page.html',
  styleUrls: ['./boton-sos.page.scss'],
})
export class BotonSOSPage {
  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta SOS',
      message: 'Nos hemos comunicado con tu contacto de preferencia y Las autoridades van en camino',
      buttons: ['OK']
    });

    await alert.present();
  }
}