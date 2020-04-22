import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  textoBuscar = '';
  superHeroes: Observable<any>;
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  constructor( private dataSrvc: DataService ) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataSrvc.getHeroes();
  }

  segmentChanged(ev: any) {
    const valorSegmento = ev.target.value;

    if (valorSegmento === 'todos') {
      this.textoBuscar = '';
      return;
    }
    this.textoBuscar = valorSegmento;
  }

}
