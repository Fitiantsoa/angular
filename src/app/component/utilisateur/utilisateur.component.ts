import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from './../../model/adresse';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../model/utilisateur';
import { UtilisateurService } from '../../service/utilisateur.service';
import { Civilite } from 'src/app/model/civilite';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();
  civilites = Civilite;

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    this.utilisateur.civilite = Civilite.MME;
    this.utilisateur.adresse = new Adresse();
  }

  ngOnInit(): void {
    this.showInformations();
  }

  showInformations() {
    this.utilisateurService.info().subscribe((result) => {
      console.log(result);
      if (result != null) {
        console.log('ici');
        this.utilisateur = result;
        if (!this.utilisateur.adresse) {
          this.utilisateur.adresse = new Adresse();
        }
      } else {
        this.utilisateur = new Utilisateur();
        this.utilisateur.civilite = Civilite.MME;
        this.utilisateur.adresse = new Adresse();
      }
    });
  }

  save() {
    if (this.utilisateur.id != null) {
      this.utilisateurService.update(this.utilisateur).subscribe((ok) => {
        this.router.navigate(['/achat']);
      });
    } else {
      this.utilisateurService.create(this.utilisateur).subscribe((ok) => {});
    }
  }
}
