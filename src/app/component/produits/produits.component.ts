import { Component, OnInit } from '@angular/core';
import { Plante } from 'src/app/model/plante';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/sercice/produit/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.produitService.getAll().subscribe((result) => {
      this.produits = result;
      console.log(this.produits);
      for (var produit of this.produits) {
        if (!produit.plante) {
          produit.plante = new Plante();
        }
      }
    });
  }
}
