import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: ev,
      translucent: true,
      mode: 'ios',
      backdropDismiss: false
    });
    // console.log(ev)
    await popover.present();

    // Recibe datos del hijo (popinfo) ondidismiss espera que se cierre y toma datos
    // const  { data } = await popover.onDidDismiss();
    // onWillDismiss cuando vaya a cerrarse
    const  { data } = await popover.onWillDismiss();

    console.log('Padre:', data);

  }
}
