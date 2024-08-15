import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private quantites: number[] = [];

  addItem(quantity: number = 1): void {
    // Ajouter la quantité au tableau
    this.quantites.push(quantity);
  }

  // Méthode pour retirer des articles
  removeItem(quantity: number = 1): void {
    this.removeQuantityFromArray(quantity);
  }

  // Méthode pour obtenir les quantités dans le panier
  getQuantites(): number[] {
    return this.quantites;
  }

  // Méthode pour retirer une quantité spécifique du tableau
  private removeQuantityFromArray(quantity: number): void {
    let remaining = quantity;
    for (let i = 0; i < this.quantites.length && remaining > 0; i++) {
      if (this.quantites[i] <= remaining) {
        remaining -= this.quantites[i];
        this.quantites.splice(i, 1);
        i--; // Ajuster l'index après la suppression
      } else {
        this.quantites[i] -= remaining;
        remaining = 0;
      }
    }
  }
}
