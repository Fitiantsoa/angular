import { UtilisateurService } from '../../service/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private utilisateurService: UtilisateurService
  ) {}

  utilisateur: Utilisateur = new Utilisateur();

  ngOnInit(): void {
    this.showUtilisateur();
  }

  showUtilisateur() {
    this.utilisateurService.info().subscribe((result) => {
      this.utilisateur = result;
    });
  }
}
