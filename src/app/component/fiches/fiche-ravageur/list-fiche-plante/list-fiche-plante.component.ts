import { Observable } from 'rxjs';
import { FicheRavageurService } from './../../../../service/fiches/fiche-ravageur.service';
import { Component, OnInit } from '@angular/core';
import { FicheRavageur } from 'src/app/model/fiches/fiche-ravageur';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-list-fiche-plante',
  templateUrl: './list-fiche-plante.component.html',
  styleUrls: ['./list-fiche-plante.component.css']
})
export class ListFichePlanteComponent implements OnInit {

  fichesRavageurObservable!: Observable<FicheRavageur[]>;

  constructor(private ficheRavageurService: FicheRavageurService) {}

  ngOnInit(): void {
    this.fichesRavageurObservable = this.ficheRavageurService.getAll();
  }

  delete(id: number) {
    this.ficheRavageurService.delete(id).subscribe((ok) => {
      this.fichesRavageurObservable = this.ficheRavageurService.getAll();
    });
  }

}
