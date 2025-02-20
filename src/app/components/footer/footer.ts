import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  standalone: false
})
export class FooterComponent {
    fecha: number = new Date().getFullYear();
    nombre: string = "Bran Bouzas Prado"
}
