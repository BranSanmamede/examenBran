import { Injectable } from '@angular/core';
import { Personal } from '../interfaces/personal';
import personal from '../../../public/json/personal.json';

@Injectable({
  providedIn: 'root'
})
export class PersoalService {
  
  personal: Personal[] = personal;
  
  constructor() {}
  
  filtrarPorPuntuacion() {
    return this.personal.sort((a, b) => a.puntuacion - b.puntuacion).reverse();
  }
}
