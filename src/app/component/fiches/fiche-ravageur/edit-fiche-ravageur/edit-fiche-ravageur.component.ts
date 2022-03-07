import { FicheRavageurService } from './../../../../service/fiches/fiche-ravageur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheRavageur } from './../../../../model/fiches/fiche-ravageur';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-fiche-ravageur',
  templateUrl: './edit-fiche-ravageur.component.html',
  styleUrls: ['./edit-fiche-ravageur.component.css']
})
export class EditFicheRavageurComponent implements OnInit {

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

  save() {
    if (this.ficheRavageur.id) {
      this.ficheRavageurService.update(this.ficheRavageur).subscribe((ok) => {
        this.router.navigate(['/fiches_ravageur']);
      });
    } else {
      this.ficheRavageurService.create(this.ficheRavageur).subscribe((ok) => {
        this.router.navigate(['/fiches_ravageur']);
      });
    }
  }

}
