import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albumes: any[] = [];
  textoBuscar = '';
  constructor( private dataSrvc: DataService) { }

  ngOnInit() {
    this.dataSrvc.getAlbumes()
    .subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  buscar( ev: any ) {
    // console.log(ev)
    this.textoBuscar = ev.detail.value;
  }

}
