import { Component, OnInit } from '@angular/core';
import { Personal } from '../../interfaces/personal';
import { PersoalService } from '../../services/persoalService';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  standalone: false
})
export class CarouselComponent implements OnInit{
    personal!: Personal[];

    constructor(private service: PersoalService) {}

    ngOnInit() {
        console.log(this.service.filtrarPorPuntuacion());
        this.personal = this.service.filtrarPorPuntuacion();
    }
}
