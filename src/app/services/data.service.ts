import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // Implementa el menu, ya no va en el arreglo de inicio.page.ts se lo movió a assets y se guardó ahí el json
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
