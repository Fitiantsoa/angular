import { TypePlante } from 'src/app/model/type-plante';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/sercice/produit/produit.service';

@Component({
  selector: 'app-create-produit-vendre',
  templateUrl: './create-produit-vendre.component.html',
  styleUrls: ['./create-produit-vendre.component.css'],
})
export class CreateProduitVendreComponent implements OnInit {
  @Input()
  typePlante: string = '';

  produit: Produit = new Produit();

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

  save() {
    if (this.produit.id) {
      this.produitService.update(this.produit).subscribe((ok) => {
        this.router.navigate(['/vendre']);
      });
    } else {
      if (this.typePlante != '') {
        this.produit.nom = this.typePlante;
      }
      this.produitService.create(this.produit).subscribe((ok) => {
        this.router.navigate(['/vendre']);
      });
    }
  }

  delete(id: number) {
    this.produitService.delete(id).subscribe((ok) => {
      this.router.navigate(['/vendre']);
    });
  }
}
