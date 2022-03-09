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

  addProduit(produit: Produit) {
    let storedProduits = this.getProduits();

    let alreadyExistProduit = storedProduits.get(produit.id!);
    if(alreadyExistProduit != undefined) {
      alreadyExistProduit.quantite!++;
    } else {
      storedProduits.set(produit.id!, new PanierProduit(produit, 1));
    }

    localStorage.setItem('panier', JSON.stringify(storedProduits));
  }

  deleteProduit(produit: Produit) {
    if(produit.id == undefined) return;

    let storedProduits = this.getProduits();

    if(storedProduits.get(produit.id) != null) {
      storedProduits.delete(produit.id);
    }
  }
}
