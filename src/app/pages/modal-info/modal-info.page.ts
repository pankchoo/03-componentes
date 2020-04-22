import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
// estas variables deben tener el mismo nombre de la página que envía
  @Input() nombre;
  @Input() pais;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'Fernando',
      pais: 'España'
    });
  }
}
