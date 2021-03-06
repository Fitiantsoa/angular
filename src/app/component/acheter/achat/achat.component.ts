import { UtilisateurService } from './../../../service/utilisateur.service';
import { Utilisateur } from 'src/app/model/utilisateur';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/sercice/produit/produit.service';
import { CommandeService } from '../../../service/commande.service';
import { Commande } from '../../../model/commande';
import { CommandeProduit } from '../../../model/commande-produit';
import { CommandeProduitKey } from '../../../model/commande-produit-key';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css'],
})
export class AchatComponent implements OnInit {
  produit: Produit = new Produit();
  quantite: number = 0;
  choix_quantite: number[] = [];
  prix_total: number = 0;
  utilisateur: Utilisateur = new Utilisateur();

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private commandeService: CommandeService,
    private utilisateurService: UtilisateurService,
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
          if (this.produit.stock) {
            for (let i = 1; i <= this.produit.stock; i++) {
              this.choix_quantite.push(i);
            }
          }
        });
      }
    });
  }

  achat() {
    if (this.produit.stock) {
      let commande: Commande = new Commande();
      let commandeProduits: CommandeProduit[] = [];
      commandeProduits.push(
        new CommandeProduit(new CommandeProduitKey(this.produit), this.quantite)
      );
      commande.commandeProduits = commandeProduits;

      this.produit.stock -= this.quantite;

      this.utilisateurService.info().subscribe((result) => {
        this.utilisateur = result;
        if (!this.utilisateur.adresse) {
          if (
            confirm(
              'Vous devez renseigner vos informations personnelles afin de pouvoir passer une commande. Voulez-vous continuer?'
            )
          ) {
            this.router.navigate(['/user']);
          } else {
            this.router.navigate(['/achat']);
          }
        } else {
          this.commandeService.create(commande).subscribe((ok) => {
            this.produitService
              .update(this.produit)
              .subscribe((ok) => this.router.navigate(['/achat']));
            alert(
              "Commande pass?? avec succ??s. Vous pouvez consulter la liste de vos commandes dans la rubrique 'COMMANDE'"
            );
          });
        }
      });
    }
  }
}
