import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/sercice/produit/produit.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css'],
})
export class AchatComponent implements OnInit {
  produit: Produit = new Produit();
  quantite: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.produitService.get(params['id']).subscribe((result) => {
          this.produit = result;
        });
      }
    });
  }

  achat() {
    if (this.produit.stock) {
      this.produit.stock -= this.quantite;
      this.produitService
        .update(this.produit)
        .subscribe((ok) => this.router.navigate(['/achat']));
    }
  }
}
