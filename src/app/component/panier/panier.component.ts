import { Component, OnInit } from '@angular/core';
import { PanierProduit } from "../../model/panier-produit";
import { PanierService } from "../../service/panier.service";
import { CommandeService } from "../../service/commande.service";
import { Commande } from "../../model/commande";
import { CommandeProduit } from "../../model/commande-produit";
import { CommandeProduitKey } from "../../model/commande-produit-key";
import { Router } from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits: Map<number, PanierProduit> = new Map<number, PanierProduit>();

  constructor(private router: Router, private panierService: PanierService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.produits = this.panierService.getProduits();
  }

  // TODO: finir
  createCommande() {
    let commande: Commande = new Commande();
    let commandeProduits: CommandeProduit[] = [];

    this.produits.forEach(produit => {
      commandeProduits.push(new CommandeProduit(new CommandeProduitKey(produit.produit), produit.quantite));
    });

    commande.commandeProduits = commandeProduits;

    this.commandeService.create(commande).subscribe((ok) => {
      this.router.navigate(['commandes/achat']);
    });
  }

}
