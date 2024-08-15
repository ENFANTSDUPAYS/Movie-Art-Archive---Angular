import { Component } from '@angular/core';
import { CartService } from '../services/card-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  paniertext: string = 'Ajouter au panier';
  nbpanier: boolean = false;
  nombrepanier: number = 1;
  article: number =1;
  quantites: number[] = []; 

  constructor(private cartService: CartService) {}

  panier(): void {
    if (this.nbpanier) {
      this.removepanier();
    } else {
      this.addpanier();
    }
  }

  addpanier(): void {
    this.paniertext = 'Dans le panier';
    this.nbpanier = true;
    this.cartService.addItem(this.nombrepanier); // Passer le nombre d'articles à ajouter
    this.updateQuantites(); // Mettre à jour le tableau des quantités
    this.updateArticleCount(); // Mettre à jour le total des articles
  }

  removepanier(): void {
    this.paniertext = 'Ajouter au panier';
    this.nbpanier = false;
    this.cartService.removeItem(this.nombrepanier); // Passer le nombre d'articles à retirer
    this.updateQuantites(); // Mettre à jour le tableau des quantités
    this.updateArticleCount(); // Mettre à jour le total des articles
  }

  updateArticleCount(): void {
    this.article = this.cartService.getQuantites().reduce((total, quantity) => total + quantity, 0);
  }

  updateQuantites(): void {
    this.quantites = this.cartService.getQuantites();
  }
}
