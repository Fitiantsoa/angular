import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../../../model/utilisateur";
import { ActivatedRoute } from "@angular/router";
import { UtilisateurService } from "../../../service/utilisateur.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur();

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    this.showInformations();
  }

  showInformations() {
    this.utilisateurService.info().subscribe((result) => {
      this.utilisateur = result;
    });
  }

}
