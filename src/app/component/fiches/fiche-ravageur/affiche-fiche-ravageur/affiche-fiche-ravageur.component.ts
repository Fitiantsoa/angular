import { Observable } from 'rxjs';
import { FicheRavageurService } from './../../../../service/fiches/fiche-ravageur.service';
import { Component, OnInit } from '@angular/core';
import { FicheRavageur } from 'src/app/model/fiches/fiche-ravageur';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-affiche-fiche-ravageur',
  templateUrl: './affiche-fiche-ravageur.component.html',
  styleUrls: ['./affiche-fiche-ravageur.component.css']
})
export class AfficheFicheRavageurComponent implements OnInit {

  ficheRavageur: FicheRavageur = new FicheRavageur();

  constructor(
    private activatedRoute: ActivatedRoute,
    private ficheRavageurService: FicheRavageurService,
    private router: Router
  ){}
    ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.ficheRavageurService.get(params['id']).subscribe((result) => {
          console.log(result);
          this.ficheRavageur = result;
        });
      }
    });
  }

}
