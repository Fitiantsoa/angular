import { Injectable } from '@angular/core';
import { PanierProduit } from "../model/panier-produit";
import { Produit } from "../model/produit";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

  getProduits(): Map<number, PanierProduit> {
    return JSON.parse(localStorage.getItem('panier') || '[]');
  }

  addProduit(produit: Produit, quantite: number) {
    let storedProduits = this.getProduits();

    let alreadyExistProduit = storedProduits.get(produit.id!);
    if(alreadyExistProduit != undefined) {
      alreadyExistProduit.quantite!++;
    } else {
      storedProduits.set(produit.id!, new PanierProduit(produit, quantite));
    }

    this.saveLocalStorage(storedProduits);
  }

  deleteProduit(produit: Produit) {
    if(produit.id == undefined) return;

    let storedProduits = this.getProduits();

    if(storedProduits.get(produit.id) != null) {
      storedProduits.delete(produit.id);
    }

    this.saveLocalStorage(storedProduits);
  }

  private saveLocalStorage(produits: Map<number, PanierProduit>) {
    localStorage.setItem('panier', JSON.stringify(produits));
  }
}
