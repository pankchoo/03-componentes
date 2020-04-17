import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Botones y router',
      redirecTo: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'caret-up-circle-outline',
      name: 'Fabs',
      redirecTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid - Rows',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirecTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'Listas sliding',
      redirecTo: '/list'
    }
   ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

