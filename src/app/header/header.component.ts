import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CartService } from '../services/card-services';
import { RouterLink } from '@angular/router';
import { PanierComponent } from '../panier/panier.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgStyle, RouterLink, PanierComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  tableauico: { nom: string, icoURL: string, alt: string }[] = [];
  constructor(private cartService: CartService) {
    this.tableauico = [
      { nom: "Home", icoURL: "https://cdn-icons-png.flaticon.com/512/25/25694.png", alt: "Home Icon" },
      { nom: "Features", icoURL: "https://cdn.icon-icons.com/icons2/621/PNG/512/lightbulb-1_icon-icons.com_56942.png", alt: "Features Icon" },
      { nom: "About", icoURL: "https://www.svgrepo.com/show/24584/info-icon.svg", alt: "About Icon" },
      { nom: "Contact", icoURL: "https://www.svgrepo.com/show/55744/notebook-of-contacts.svg", alt: "Contact Icon" },
      {nom: "Panier", icoURL: "https://cdn-icons-png.flaticon.com/512/126/126083.png", alt: "Panier Icon"}
    ];
  }
  get articletotal(): number {
    const quantites = this.cartService.getQuantites();
    return quantites.reduce((total, quantity) => total + quantity, 0);
  }

  get nbpanier(): boolean {
    return this.articletotal > 0;
  }
  
  //POUR GERER LES ROUTES
  getRouterLink(nom: string): string {
    switch (nom.toLowerCase()) {
      case 'home':
        return '/';
      case 'features':
        return '/features';
      case 'about':
        return '/about';
      case 'contact':
        return '/contact';
      case 'panier':
        return '/panier';
      default:
        return '/';
    }
  }



}






