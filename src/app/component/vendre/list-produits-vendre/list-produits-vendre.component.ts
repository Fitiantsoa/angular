import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/sercice/produit/produit.service';

@Component({
  selector: 'app-list-produits-vendre',
  templateUrl: './list-produits-vendre.component.html',
  styleUrls: ['./list-produits-vendre.component.css']
})
export class ListProduitsVendreComponent implements OnInit {

  produitsObservable!: Observable<Produit[]>;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitsObservable = this.produitService.getByUtilisateur();
  }


  delete(id: number) {
    this.produitService.delete(id).subscribe((ok) => {
      this.produitsObservable = this.produitService.getByUtilisateur();
    });
  }

}
