import { Component, OnInit } from '@angular/core';
import { PanierProduit } from "../../model/panier-produit";
import { PanierService } from "../../service/panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits!: Map<number, PanierProduit>;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.produits = this.panierService.getProduits();
  }

}
